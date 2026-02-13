import { TypeSkillType } from '@/types/data/TypeSkills'
import SkillItem from './skill-item'

type SkillsListProps = {
  className?: string
  children?: React.ReactNode
  list: TypeSkillType['list']
}

export default function SkillsList({ className, list }: SkillsListProps) {
  return (
    <div className={`SkillsList ${className ?? ''}`}>
      <ul className="flex flex-wrap gap-2">
        {list.map((item) => {
          return (
            <li key={item}>
              <SkillItem>{item}</SkillItem>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
