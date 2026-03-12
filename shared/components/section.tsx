import { cn } from '@/shared/lib/utils'

type SectionProps = {
  className?: string
  children?: React.ReactNode
}

export default function Section({ className, children }: SectionProps) {
  return <section className={cn('Section', className)}>{children}</section>
}
