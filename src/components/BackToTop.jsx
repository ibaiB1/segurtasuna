import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import './back-to-top.css'

/**
 * Goora itzultzeko botoia.
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      className={`back-to-top ${visible ? 'is-visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Goora itzuli"
      title="Goora itzuli"
    >
      <ArrowUp size={24} strokeWidth={2.4} aria-hidden="true" />
    </button>
  )
}