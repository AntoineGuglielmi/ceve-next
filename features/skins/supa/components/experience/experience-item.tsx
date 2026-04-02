import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'
import { MoleculesExperienceItem } from '@/types/strapi-types'
import { MapPin, Minus } from 'lucide-react'

type ExperienceItemProps = {
  className?: string
} & MoleculesExperienceItem

const ExperienceItemVariants = cva(
  'ExperienceItem grid grid-cols-[3fr_4fr] tile p-2',
  {
    variants: {},
    defaultVariants: {},
  },
)

export default function ExperienceItem({
  className,
  end,
  geo,
  jobs,
  organism,
  start,
  title,
  description,
}: ExperienceItemProps) {
  return (
    <div className={cn(ExperienceItemVariants({ className }))}>
      <div className="ExperienceItem__infos flex flex-col gap-1">
        <header className="flex gap-1 items-center fz-2">
          <p className="shrink-0">{start}</p>
          <Minus size={10} />
          <p className="shrink-0">{end}</p>
          <MapPin size={12} />
          {geo}
        </header>
        <h4 className="fz-3 font-bold">{title}</h4>
        <p className="">{organism}</p>
      </div>
      <div className="ExperienceItem__description">
        <p className="fz-2">{description}</p>
      </div>
    </div>
  )
}
