import { TypeJob } from '@/types/data/TypeExperiences'

type JobItemProps = {
  className?: string
  children?: React.ReactNode
  title: TypeJob['title']
  text: TypeJob['text']
}

export default function JobItem({ className, text, title }: JobItemProps) {
  return (
    <div className={`JobItem ${className ?? ''}`}>
      <p className="font-bold">{title}</p>
      <p>{text}</p>
    </div>
  )
}
