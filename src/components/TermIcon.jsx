import {
  MailWarning, Bug, VenetianMask, DoorOpen, ScanEye, Wallet,
  Share2, Network, KeyRound, Repeat, Ghost,
} from 'lucide-react'

/**
 * Termino bakoitzaren ikonoa (Lucide). Data-destatik banatuta dago
 * terminoaren slug-aren arabera.
 */
const MAP = {
  phishinga: MailWarning,
  birusak: Bug,
  troiarrak: VenetianMask,
  backdoorrak: DoorOpen,
  spywarea: ScanEye,
  stealerrak: Wallet,
  koobface: Share2,
  botnet: Network,
  'indar-gordineko-erasoa': KeyRound,
  'aktiboak-atzeko-ateak': DoorOpen,
  'aktiboak-botnetak': Network,
  'aktiboak-harrak': Repeat,
  'aktiboak-mamuak': Ghost,
  'aktiboak-troiarrak': VenetianMask,
}

export default function TermIcon({ slug, size = 24, strokeWidth = 2.2, className = '', style }) {
  const Cmp = MAP[slug]
  if (!Cmp) return null
  return (
    <Cmp
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      style={style}
      aria-hidden="true"
    />
  )
}