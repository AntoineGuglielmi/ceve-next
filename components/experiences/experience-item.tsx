import { TypeExperienceItem } from '@/types/data/TypeExperiences'
import Title from '../shared/item/title'
import Date from '../shared/item/date'
import List from '@/shared/components/lists/list'
import JobItem from './job-item'

type ExperienceItemProps = {
  className?: string
  children?: React.ReactNode
  // item: TypeExperienceItem
  title: TypeExperienceItem['title']
  organism: TypeExperienceItem['organism']
  start: TypeExperienceItem['start']
  end: TypeExperienceItem['end']
  geo: TypeExperienceItem['geo']
  jobs: TypeExperienceItem['jobs']
}

export default function ExperienceItem({
  className,
  title,
  end,
  organism,
  geo,
  start,
  jobs,
}: ExperienceItemProps) {
  return (
    <div className={`ExperienceItem grid grid-cols-phi ${className ?? ''}`}>
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
          <List
            className="flex flex-col gap-2"
            items={jobs}
            renderItem={JobItem}
            getKey={(item) => item.title}
          />
        </div>
      </div>
    </div>
  )
}
