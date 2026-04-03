import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'
import { Project } from '@/types/strapi-types'
import Link from 'next/link'
import { Link as LinkIcon } from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import { LucideIcon } from 'lucide-react'

type HighlightedProjectProps = {
  className?: string
  children?: React.ReactNode
} & Project

const HighlightedProjectVariants = cva(
  'HighlightedProject flex flex-col gap-2 p-2 tile h-full',
  {
    variants: {},
    defaultVariants: {},
  },
)

export default function HighlightedProject({
  className,
  short_desc,
  title,
  link,
  icon,
}: HighlightedProjectProps) {
  const Icon = icon
    ? (LucideIcons[icon as keyof typeof LucideIcons] as LucideIcon)
    : null
  return (
    <div className={cn(HighlightedProjectVariants({ className }))}>
      <header className="flex gap-2">
        <div className="size-12 shrink-0 rounded-full bg-gray-200 flex items-center justify-center">
          {Icon && <Icon />}
        </div>
        <div className="">
          <h4 className="font-bold fz-3">{title}</h4>
          <p>{short_desc}</p>
        </div>
      </header>

      <Link
        href={link!}
        className="flex gap-2 items-center mt-auto"
      >
        <LinkIcon size={12} />
        <span className="accent-text">{link}</span>
      </Link>
    </div>
  )
}
