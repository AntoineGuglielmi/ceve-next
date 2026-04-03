import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'

type CvSectionProps = {
  className?: string
  children?: React.ReactNode
}

const CvSectionVariants = cva('CvSection p-8 relative', {
  variants: {},
  defaultVariants: {},
})

export default function CvSection({ className, children }: CvSectionProps) {
  return <div className={cn(CvSectionVariants({ className }))}>{children}</div>
}
