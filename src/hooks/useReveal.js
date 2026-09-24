import { useEffect, useRef, useState } from 'react'

/**
 * IntersectionObserver-ean oinarritutako scroll-reveal hooka.
 * `inView` true itzultzen du elementua ikusgai dagoenean (behin, lehenespenez).
 */
export function useReveal({ once = true, threshold = 0.18, rootMargin = '0px 0px -8% 0px' } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Zaharregia bada (ez dago IntersectionObserver-ik), ikusgai jarri betirako
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.unobserve(entry.target)
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once, threshold, rootMargin])

  return { ref, inView }
}