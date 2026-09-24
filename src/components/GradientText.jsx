import './gradient-text.css'

/**
 * Gradiente animatua duen testua (boligrafoaren koloreak).
 */
export default function GradientText({ children, colors, className = '' }) {
  const style = colors
    ? { '--grad-1': colors[0], '--grad-2': colors[1], '--grad-3': colors[2] }
    : undefined
  return (
    <span className={`gradient-text ${className}`} style={style}>
      {children}
    </span>
  )
}