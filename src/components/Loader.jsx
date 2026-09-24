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
            {/* Arkatz eskuz marraztua: punta behe-ezkerantz */}
            <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true">
              <g transform="rotate(45 16 16)">
                <path d="M2 16 L10 11.5 L10 20.5 Z" fill="#e8b06a" stroke="#33304a" strokeWidth="1.6" strokeLinejoin="round" />
                <path d="M2 16 L5.5 14.2 L5.5 17.8 Z" fill="#33304a" />
                <rect x="10" y="11.5" width="15" height="9" fill="#f0c94a" stroke="#33304a" strokeWidth="1.6" />
                <line x1="10" y1="16" x2="25" y2="16" stroke="#e0a92f" strokeWidth="1.6" />
                <rect x="25" y="11.5" width="2.5" height="9" fill="#c9cdd6" stroke="#33304a" strokeWidth="1.4" />
                <rect x="27.5" y="11.5" width="3.2" height="9" rx="1.4" fill="#f3b9b9" stroke="#33304a" strokeWidth="1.4" />
              </g>
            </svg>
          </span>
        </div>
        <p className="loader__text">
          Kargatzen<span className="loader__dots"><i>.</i><i>.</i><i>.</i></span>
        </p>
      </div>
    </div>
  )
}