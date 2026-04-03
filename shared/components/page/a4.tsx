import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'

type A4Props = {
  className?: string
  shadow?: boolean
  children?: React.ReactNode
}

const A4Variants = cva('A4 h-[29.7cm] w-[21cm]', {
  variants: {
    shadow: {
      true: 'shadow-[0_0_0.5rem_0_rgba(0,0,0,0.15)]',
    },
  },
  defaultVariants: {
    shadow: true,
  },
})

export default function A4({ className, shadow, children }: A4Props) {
  return <div className={cn(A4Variants({ shadow, className }))}>{children}</div>
}
