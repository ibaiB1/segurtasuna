import './split-text.css'

/**
 * Testua hitzetan/letrarantzan banatzen du eta batera agertarazten du
 * (reactbits-en SplitText-aren antzekoa, baina berezkoa).
 */
export default function SplitText({
  text,
  by = 'word', // 'word' | 'char'
  delay = 0,
  stagger = 45,
  className = '',
}) {
  const units = by === 'char' ? Array.from(text) : text.split(/(\s+)/)

  let i = 0
  return (
    <span className={`split-text ${className}`} aria-label={text}>
      {units.map((u, idx) => {
        // Zuriuneak kontuan hartu gabe animatu
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