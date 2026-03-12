import { cn } from '@/shared/lib/utils'

type SectionGroupProps = {
  className?: string
  children?: React.ReactNode
}

export default function SectionGroup({
  className,
  children,
}: SectionGroupProps) {
  return (
    <div className={cn('SectionGroup flex flex-col gap-8 p-8', className)}>
      {children}
    </div>
  )
}
