import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'

type SectionTitleProps = {
  className?: string
  children?: React.ReactNode
}

const SectionTitleVariants = cva('SectionTitle fz-3 font-bold mb-3', {
  variants: {},
  defaultVariants: {},
})

export default function SectionTitle({
  className,
  children,
}: SectionTitleProps) {
  return <h2 className={cn(SectionTitleVariants({ className }))}>{children}</h2>
}
