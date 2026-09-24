import './split-text.css'

/**
 * Testua hitzetan/letrarantzan banatzen du eta batera agertarazten du.
 * 'char' moduan: hitz bakoitza `white-space:nowrap` eskuineko span batean
 * itxaroten du, hitzak baino lehen lehenengo zutabe batean zutatzeko aukera
 * ematen du (zenbait bertikal mugikorragoa).
 */
export default function SplitText({
  text,
  by = 'word',
  delay = 0,
  stagger = 45,
  className = '',
}) {
  if (by !== 'char') {
    // Word mode (original)
    const units = text.split(/(\s+)/)
    let i = 0
    return (
      <span className={`split-text ${className}`} aria-label={text}>
        {units.map((u, idx) => {
          if (/^\s+$/.test(u)) return <span key={idx}> </span>
          const d = delay + i++ * stagger
          return (
            <span
              key={idx}
              aria-hidden="true"
              className="split-text__unit"
              style={{ animationDelay: `${d}ms` }}
            >
              {u}
            </span>
          )
        })}
      </span>
    )
  }

  // Char mode: split into words, then wrap each word's chars in nowrap span
  const words = text.split(/(\s+)/)
  let i = 0
  return (
    <span className={`split-text ${className}`} aria-label={text}>
      {words.map((w, idx) => {
        if (/^\s+$/.test(w)) return <span key={idx}> </span>
        // Word: split into chars
        const chars = Array.from(w)
        return (
          <span
            key={idx}
            className="split-text__word"
            style={{ whiteSpace: 'nowrap' }}
          >
            {chars.map((c, ci) => {
              const d = delay + i++ * stagger
              return (
                <span
                  key={ci}
                  aria-hidden="true"
                  className="split-text__unit"
                  style={{ animationDelay: `${d}ms` }}
                >
                  {c}
                </span>
              )
            })}
          </span>
        )
      })}
    </span>
  )
}