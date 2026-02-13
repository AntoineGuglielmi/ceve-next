import { TypeExperienceItem } from '@/types/data/TypeExperiences'
import JobItem from './job-item'

type JobsListProps = {
  className?: string
  children?: React.ReactNode
  list: TypeExperienceItem['jobs']
}

export default function JobsList({ className, list }: JobsListProps) {
  return (
    <ul className={`JobsList flex flex-col gap-2 ${className ?? ''}`}>
      {list.map((job) => {
        return (
          <li key={job.title}>
            <JobItem item={job} />
          </li>
        )
      })}
    </ul>
  )
}
