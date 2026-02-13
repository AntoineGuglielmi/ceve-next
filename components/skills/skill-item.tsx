import Pill from '../shared/pill/pill'

type SkillItemProps = {
  className?: string
  children?: React.ReactNode
}

export default function SkillItem({ className, children }: SkillItemProps) {
  return <Pill className={`SkillItem ${className ?? ''}`}>{children}</Pill>
}
