import { TypeExperienceItem } from '@/types/data/TypeExperiences'
import JobsList from './jobs-list'
import Title from '../shared/item/title'
import Date from '../shared/item/date'

type ExperienceItemProps = {
  className?: string
  children?: React.ReactNode
  item: TypeExperienceItem
}

export default function ExperienceItem({
  className,
  item,
}: ExperienceItemProps) {
  const { title, organism, start, end, geo, jobs } = item
  return (
    <div
      className={`ExperienceItem grid grid-cols-[38.2%_61.8%] ${className ?? ''}`}
    >
      <div className="ExperienceItem__header col-span-2 grid grid-cols-subgrid">
        <div className="ExperienceItem__infos">
          <Title>{title}</Title>
          <p className="font-bold">{organism}</p>
          <p className="">{geo}</p>
          <Date
            start={start}
            end={end}
          />
        </div>

        <div className="ExperienceItem__jobs border-l border-l-cv-orange pl-2">
          <JobsList list={jobs} />
        </div>
      </div>
    </div>
  )
}
