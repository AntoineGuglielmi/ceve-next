import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'
import { MoleculesDiplomaItem } from '@/types/strapi-types'
import { MapPin, Minus } from 'lucide-react'

type DiplomaItemProps = {
  className?: string
} & MoleculesDiplomaItem

const DiplomaItemVariants = cva(
  'DiplomaItem tile p-3 h-full flex flex-col gap-1',
  {
    variants: {},
    defaultVariants: {},
  },
)

export default function DiplomaItem({
  className,
  end,
  geo,
  organism,
  start,
  title,
}: DiplomaItemProps) {
  return (
    <div className={cn(DiplomaItemVariants({ className }))}>
      <header className="flex items-center fz-2 gap-1">
        <p>{start}</p>
        <Minus size={10} />
        <p>{end}</p>
        <MapPin size={12} />
        {geo}
      </header>
      <h4 className="fz-3 font-bold">{title}</h4>
      <p className="">{organism}</p>
    </div>
  )
}
