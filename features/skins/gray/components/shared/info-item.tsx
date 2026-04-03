import { DynamicIcon } from '@/shared/components/dynamic-icon/dynamic-icon'
import * as LucideIcons from 'lucide-react'

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
    <p
      className={`ContactItem flex gap-2 min-w-0 items-start ${className ?? ''}`}
    >
      {icon && (
        <DynamicIcon
          name={icon}
          size={12}
          className="shrink-0 mt-1.5"
        />
      )}
      <span className="min-w-0 flex-1 wrap-break-word">{children}</span>
    </p>
  )
}
