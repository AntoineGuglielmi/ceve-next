import { cn } from '@/shared/lib/utils'

type PageSectionProps = {
  className?: string
  children?: React.ReactNode
}

export default function PageSection({ className, children }: PageSectionProps) {
  return <section className={cn('PageSection', className)}>{children}</section>
}
