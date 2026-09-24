import { useReveal } from '../hooks/useReveal'
import './reveal.css'

/**
 * Scroll-reveal bilgarria. Sarrerako animazioak:
 * 'up' | 'left' | 'right' | 'blur' | 'pop' | 'tilt'
 */
export default function Reveal({
  children,
  variant = 'up',
  delay = 0,
  once = true,
  as: Tag = 'div',
  className = '',
  ...rest
}) {
  const { ref, inView } = useReveal({ once })
  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${variant} ${inView ? 'is-in' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}