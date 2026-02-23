import { TypeExperienceItem } from '@/types/data/TypeExperiences'
import Title from '../shared/item/title'
import Date from '../shared/item/date'
import List from '@/shared/components/lists/list'
import JobItem from './job-item'
import Border from '../shared/item/border'
import Organism from '../shared/item/organism'
import { MoleculesExperienceItem } from '@/types/strapi-types'

type ExperienceItemProps = {
  className?: string
  children?: React.ReactNode
  title?: MoleculesExperienceItem['title']
  end?: MoleculesExperienceItem['end']
  organism?: MoleculesExperienceItem['organism']
  geo?: MoleculesExperienceItem['geo']
  start?: MoleculesExperienceItem['start']
  jobs?: MoleculesExperienceItem['jobs']
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
    <div
      className={`ExperienceItem grid grid-cols-phi gap-4 ${className ?? ''}`}
    >
      <div className="ExperienceItem__infos">
        <Title>{title}</Title>
        <Organism>{organism}</Organism>
        <p className="">{geo}</p>
        <Date
          start={start!}
          end={end!}
        />
      </div>

      <div className="ExperienceItem__jobs relative col-span-1">
        <Border />
        <List
          className="flex flex-col gap-2"
          items={jobs!}
          renderItem={JobItem}
          getKey={(item) => item.title!}
        />
      </div>
    </div>
  )
}
