import Pill from '../shared/pill/pill'

type MiscItemProps = {
  className?: string
  children?: React.ReactNode
}

export default function MiscItem({ className, children }: MiscItemProps) {
  return <Pill className={`MiscItem ${className ?? ''}`}>{children}</Pill>
}
