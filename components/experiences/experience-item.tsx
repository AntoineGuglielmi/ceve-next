import { TypeExperienceItem } from '@/types/data/TypeExperiences'
import JobsList from './jobs-list'

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
          <p className="font-bold pr-2 uppercase text-[13px]">{title}</p>
          <p className="font-bold">{organism}</p>
          <p className="">{geo}</p>
          <p>
            {start} - {end}
          </p>
        </div>

        <div className="ExperienceItem__jobs">
          <JobsList list={jobs} />
        </div>
      </div>
    </div>
  )
}
