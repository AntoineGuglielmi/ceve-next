import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'

type SectionTitleProps = {
  className?: string
  variant?: 'default' | 'accent'
  children?: React.ReactNode
}

const SectionTitleVariants = cva('SectionTitle fz-[18px] font-bold mb-2', {
  variants: {
    variant: {
      default: '',
      accent:
        'bg-linear-to-r from-[#A478E8] to-[#516CF7] bg-clip-text text-transparent',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export default function SectionTitle({
  className,
  children,
  variant,
}: SectionTitleProps) {
  return (
    <h2 className={cn(SectionTitleVariants({ variant, className }))}>
      {children}
    </h2>
  )
}
