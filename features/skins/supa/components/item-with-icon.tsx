import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'
import * as LucideIcons from 'lucide-react'
import { LucideIcon, LucideProps } from 'lucide-react'

type ItemWithIconProps = {
  className?: string
  title: string
  text: string | React.ReactNode
  size?: LucideProps['size']
  iconName: keyof typeof LucideIcons
}

const ItemWithIconVariants = cva('ItemWithIcon flex gap-2', {
  variants: {},
  defaultVariants: {},
})

export default function ItemWithIcon({
  className,
  iconName,
  text,
  title,
  size,
}: ItemWithIconProps) {
  const Icon = LucideIcons[iconName] as LucideIcon
  return (
    <div className={cn(ItemWithIconVariants({ className }))}>
      <div className="ItemWithIcon__icon size-8 rounded-full bg-gray-200 flex items-center justify-center">
        <Icon size={12} />
      </div>
      <div className="ItemWithIcon__content flex flex-col">
        <p className="fz-[6px] text-gray-400">{title}</p>
        <p className="min-w-0 flex-1 wrap-break-word">{text}</p>
      </div>
    </div>
  )
}
