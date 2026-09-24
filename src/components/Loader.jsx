import { useEffect, useState } from 'react'
import './loader.css'

const WRITE_PATH = 'M20 74 C 58 18, 96 108, 138 58 C 168 22, 198 96, 240 54 C 264 30, 288 78, 302 56'

/**
 * Lehen kargako loader-a: arkatz bat lerro bat marrazten ari da paper gainean.
 */
export default function Loader({ duration = 1600, onLeaveStart, onDone }) {
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => {
      setLeaving(true)
      onLeaveStart?.()
    }, duration)
    const t2 = setTimeout(() => onDone?.(), duration + 550)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [duration, onLeaveStart, onDone])

  return (
    <div className={`loader ${leaving ? 'loader--leave' : ''}`} aria-hidden="true">
      <div className="loader__card">
        <div className="loader__scene">
          <svg viewBox="0 0 320 120" className="loader__svg">
            <path
              className="loader__stroke"
              d={WRITE_PATH}
              fill="none"
              stroke="#2451b3"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>
          <span className="loader__pencil" style={{ offsetPath: `path('${WRITE_PATH}')` }}>
            ✏️
          </span>
        </div>
        <p className="loader__text">
          Kargatzen<span className="loader__dots"><i>.</i><i>.</i><i>.</i></span>
        </p>
      </div>
    </div>
  )
}