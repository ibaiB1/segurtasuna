import { useEffect, useState } from 'react'
import './scroll-progress.css'

/**
 * Irakurketaren aurrerapen-barra: arkatz bat goian lerroa marrazten.
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf = null
    const update = () => {
      raf = null
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      setProgress(max > 0 ? Math.min(1, doc.scrollTop / max) : 0)
    }
    const onScroll = () => {
      if (raf === null) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div
        className="scroll-progress__bar"
        style={{ transform: `scaleX(${progress})` }}
      />
      {/* Arkatza barraren kanpoan dago, scaleX-ek ez dezan deformetu */}
      <span className="scroll-progress__pencil" style={{ left: `${progress * 100}%` }}>
        ✏️
      </span>
    </div>
  )
}