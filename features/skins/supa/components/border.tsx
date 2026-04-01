import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'

type BorderProps = {
  className?: string
  position?: 'top' | 'bottom' | 'left' | 'right'
}

const BorderVariants = cva(
  'Border absolute bg-linear-to-b from-white/0 via-black/15 to-white/0',
  {
    variants: {
      position: {
        top: 'h-px w-full top-0',
        left: 'w-px h-full left-0',
        bottom: 'h-px w-full bottom-0',
        right: 'w-px h-full right-0',
      },
    },
    compoundVariants: [
      {
        position: ['top', 'bottom'],
        class: 'bg-linear-to-r left-0',
      },
      {
        position: ['left', 'right'],
        class: 'bg-linear-to-b top-0',
      },
    ],
    defaultVariants: {
      position: 'top',
    },
  },
)

export default function Border({ className, position }: BorderProps) {
  return <div className={cn(BorderVariants({ position, className }))} />
}
