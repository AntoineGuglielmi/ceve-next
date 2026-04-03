import { MoleculesJobItem } from '@/types/strapi-types'

type JobItemProps = {
  className?: string
  children?: React.ReactNode
  title?: MoleculesJobItem['title']
  text?: MoleculesJobItem['text']
}

export default function JobItem({ className, text, title }: JobItemProps) {
  return (
    <div className={`JobItem ${className ?? ''}`}>
      <p className="font-bold">{title}</p>
      <p>{text}</p>
    </div>
  )
}
