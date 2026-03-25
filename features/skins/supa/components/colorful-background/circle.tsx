import { cn } from '@/shared/lib/utils'

type CircleProps = {
  className?: string
  children?: React.ReactNode
  size?: number
  color?: `#${string}`
  blur?: number
}

export default function Circle({
  className,
  size = 100,
  color = '#7a14ff',
  blur = 100,
}: CircleProps) {
  return (
    <div
      className={cn('Circle rounded-full absolute', className)}
      style={{
        height: `${size}px`,
        width: `${size}px`,
        backgroundColor: color,
        filter: `blur(${blur}px)`,
      }}
    />
  )
}
