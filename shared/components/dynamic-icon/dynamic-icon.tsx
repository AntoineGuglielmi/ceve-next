import * as LucideIcons from 'lucide-react'
import { LucideIcon, LucideProps } from 'lucide-react'

interface DynamicIconProps extends LucideProps {
  name: keyof typeof LucideIcons
}

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const Icon = LucideIcons[name] as LucideIcon

  if (!Icon) return null

  return (
    <Icon
      strokeWidth={1}
      {...props}
    />
  )
}
