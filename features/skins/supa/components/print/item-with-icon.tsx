import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'
import * as LucideIcons from 'lucide-react'
import { LucideIcon, LucideProps } from 'lucide-react'

type ItemWithIconProps = {
  className?: string
  title?: string
  text: string | React.ReactNode
  size?: LucideProps['size']
  iconName?: keyof typeof LucideIcons
}

const ItemWithIconVariants = cva('ItemWithIcon flex gap-2 items-center', {
  variants: {},
  defaultVariants: {},
})

export default function ItemWithIcon({
  className,
  iconName,
  text,
  title,
  size = 12,
}: ItemWithIconProps) {
  const Icon = iconName ? (LucideIcons[iconName] as LucideIcon) : null
  return (
    <div className={cn(ItemWithIconVariants({ className }))}>
      {Icon && (
        <div className="ItemWithIcon__icon size-8 rounded-full bg-gray-200 flex items-center justify-center">
          <Icon size={size} />
        </div>
      )}
      <div className="ItemWithIcon__content flex flex-col">
        {title && <p className="fz-2 text-gray-400">{title}</p>}
        <p className="min-w-0 flex-1 wrap-break-word">{text}</p>
      </div>
    </div>
  )
}
