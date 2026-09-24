import './sticky-note.css'

/**
 * Post-it nota, "Adibidea" atalak erakusteko.
 */
export default function StickyNote({ title = 'Adibidea', tilt = 'r', children }) {
  return (
    <div className={`sticky-note sticky-note--${tilt}`}>
      <span className="sticky-note__tape" aria-hidden="true" />
      <p className="sticky-note__title">📌 {title}</p>
      <div className="sticky-note__body">{children}</div>
      <span className="sticky-note__fold" aria-hidden="true" />
    </div>
  )
}