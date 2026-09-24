/**
 * Esku-marrazketako banaketa-lerroa (loremoska/izkinak).
 */
export default function Squiggle({ color = 'var(--ink-faint)', className = '' }) {
  return (
    <svg
      className={`squiggle ${className}`}
      viewBox="0 0 220 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 9 Q 14 3 26 9 T 50 9 T 74 9 T 98 9 T 122 9 T 146 9 T 170 9 T 194 9 T 218 9"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M104 2 l2.4 4.4 4.6 0.4 -3.6 3 1.2 4.6 -4.6 -2.4 -4.6 2.4 1.2 -4.6 -3.6 -3 4.6 -0.4 z"
        fill="var(--hl-yellow)"
        stroke={color}
        strokeWidth="1.2"
      />
    </svg>
  )
}