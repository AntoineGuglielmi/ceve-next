import { cn } from '@/shared/lib/utils'
import Circle from './circle'

type ColorfulBackgroundProps = {
  className?: string
  children?: React.ReactNode
}

export default function ColorfulBackground({
  className,
}: ColorfulBackgroundProps) {
  return (
    <div
      className={cn(
        'ColorfulBackground absolute overflow-hidden opacity-50',
        className,
      )}
      inert
    >
      <Circle />
      <Circle
        color="#1dcffc"
        className="-right-12.5 top-37.5"
      />
      <Circle
        color="#1dfc81"
        className="-left-12.5 top-100"
      />
      <Circle className="top-125 left-[50%]" />
      <Circle
        color="#1dcffc"
        className="-left-12.5 top-187.5"
      />
      <Circle
        color="#1dfc81"
        className="-right-12.5 top-250"
      />
    </div>
  )
}
