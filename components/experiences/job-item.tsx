import { TypeJob } from '@/types/data/TypeExperiences'

type JobItemProps = {
  className?: string
  children?: React.ReactNode
  item: TypeJob
}

export default function JobItem({ className, item }: JobItemProps) {
  const { text, title } = item
  return (
    <div className={`JobItem ${className ?? ''}`}>
      <p className="font-bold">{title}</p>
      <p>{text}</p>
    </div>
  )
}
