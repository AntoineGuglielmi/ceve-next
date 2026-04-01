import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'

type BorderProps = {
  className?: string
  position?: 'top' | 'bottom' | 'left' | 'right'
}

const BorderVariants = cva(
  'Border absolute bg-linear-to-b from-white via-black/25 to-white',
  {
    variants: {
      position: {
        top: 'h-[0.5px] w-full top-0',
        left: 'w-[0.5px] h-full left-0',
        bottom: 'h-[0.5px] w-full bottom-0',
        right: 'w-[0.5px] h-full right-0',
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
