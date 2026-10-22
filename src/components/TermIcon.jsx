import {
  MailWarning, Bug, VenetianMask, DoorOpen, ScanEye, Wallet,
  Share2, Network, KeyRound, ListChecks, Fingerprint, Key, Shuffle,
  FileSignature, BadgeCheck, Terminal,
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
  acl: ListChecks,
  'pasahitz-politikak': Fingerprint,
  'kripto-simetrikoa': Key,
  'kripto-asimetrikoa': Shuffle,
  'kripto-hibridoa': Shuffle,
  'sinadura-digitala': FileSignature,
  pki: BadgeCheck,
  'ssh-ssl-tls': Terminal,
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