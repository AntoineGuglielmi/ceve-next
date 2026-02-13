import * as LucideIcons from 'lucide-react'
import { DynamicIcon } from '../dynamic-icon/dunamic-icon'

type ContactItemProps = {
  className?: string
  children?: React.ReactNode
  icon?: keyof typeof LucideIcons
}

export default function InfoItem({
  className,
  children,
  icon,
}: ContactItemProps) {
  return (
    <p className={`ContactItem flex gap-2 items-center ${className ?? ''}`}>
      {icon && (
        <DynamicIcon
          name={icon}
          size={12}
        />
      )}
      {children}
    </p>
  )
}
