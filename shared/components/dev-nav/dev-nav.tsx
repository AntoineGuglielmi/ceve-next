import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'

type DevNavProps = {
  className?: string
  children?: React.ReactNode
  shadow?: boolean
}

const DevNavVariants = cva(
  'DevNav p-4 flex gap-4 items-center rounded bg-slate-50',
  {
    variants: {
      shadow: {
        true: 'shadow-[0_0_0.75rem_0_rgba(0,0,0,0.1)]',
      },
    },
    defaultVariants: {
      shadow: false,
    },
  },
)

export default function DevNav({ className, children }: DevNavProps) {
  return <nav className={cn(DevNavVariants({ className }))}>{children}</nav>
}
