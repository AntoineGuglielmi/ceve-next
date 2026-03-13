import InfoItem from '@/components/infos/info-item'
import List from '@/shared/components/lists/list'
import { MoleculesExperienceItem } from '@/types/strapi-types'
import JobItem from './job-item'

type ExperienceItemProps = {
  className?: string
  children?: React.ReactNode
} & MoleculesExperienceItem

export default function ExperienceItem({
  className,
  children,
  end,
  geo,
  jobs,
  start,
  title,
  organism,
}: ExperienceItemProps) {
  return (
    <div className={`ExperienceItem ${className ?? ''}`}>
      <header className="ExperienceItem__header flex flex-col @min-[550px]/main:flex-row @min-[550px]/main:gap-x-2 flex-wrap">
        <p className="font-bold text-cv-orange uppercase w-full">{title}</p>
        <InfoItem
          icon="Factory"
          className="font-bold uppercase flex-1"
        >
          {organism}
        </InfoItem>
        <InfoItem
          icon="MapPin"
          className="flex-1"
        >
          {geo}
        </InfoItem>
        <InfoItem
          icon="Calendar"
          className="flex-1"
        >
          {start} - {end}
        </InfoItem>
      </header>

      <List
        className="my-2 flex flex-col gap-2"
        items={jobs!}
        getKey={(job) => job.id!}
        renderItem={JobItem}
      />
    </div>
  )
}
