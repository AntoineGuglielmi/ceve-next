import Link from 'next/link'
import * as LucideIcons from 'lucide-react'
import { AtomsFollowItem } from '@/types/strapi-types'
import { DynamicIcon } from '@/shared/components/dynamic-icon/dynamic-icon'

type FollowItemProps = {
  className?: string
  children?: React.ReactNode
  icon?: AtomsFollowItem['icon']
  link?: AtomsFollowItem['link']
}

export default function FollowItem({ className, link, icon }: FollowItemProps) {
  return (
    <div className={`FollowItem ${className ?? ''}`}>
      <Link
        target="_blank"
        href={link!}
        className="flex gap-2 items-center"
      >
        {icon && (
          <DynamicIcon
            size={14}
            name={icon as keyof typeof LucideIcons}
          />
        )}
        <span>{link}</span>
      </Link>
    </div>
  )
}
