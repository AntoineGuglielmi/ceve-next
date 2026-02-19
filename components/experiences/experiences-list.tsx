import { TypeExperiences } from '@/types/data/TypeExperiences'
import ExperienceItem from './experience-item'

type ExperiencesListProps = {
  className?: string
  children?: React.ReactNode
  list: TypeExperiences['list']
}

export default function ExperiencesList({
  className,
  list,
}: ExperiencesListProps) {
  return (
    <ul className={`ExperiencesList flex flex-col gap-6 ${className ?? ''}`}>
      {list.map((item) => {
        return (
          <li key={item.start}>
            <ExperienceItem item={item} />
          </li>
        )
      })}
    </ul>
  )
}
