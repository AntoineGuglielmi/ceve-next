import { cn } from '@/shared/lib/utils'

type PageProps = {
  className?: string
  children?: React.ReactNode
}

export default function Page({ className, children }: PageProps) {
  return (
    <div
      className={cn(
        'Page h-[29.7cm] w-[21cm] shadow-[0_0_0.5rem_0_rgba(0,0,0,0.15)] grid grid-cols-base',
        className,
      )}
    >
      {children}
    </div>
  )
}
