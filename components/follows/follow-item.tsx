import { TypeFollowItem } from '@/types/data/TypeFollows'
import Link from 'next/link'
import { DynamicIcon } from '../shared/dynamic-icon/dunamic-icon'

type FollowItemProps = {
  className?: string
  children?: React.ReactNode
  item: TypeFollowItem
}

export default function FollowItem({
  className,
  item: { link, icon },
}: FollowItemProps) {
  return (
    <div className={`FollowItem ${className ?? ''}`}>
      {/* <p className="font-bold">{title}</p> */}

      <Link
        target="_blank"
        href={link}
        className="flex gap-2 items-center"
      >
        {icon && (
          <DynamicIcon
            size={14}
            name={icon}
          />
        )}
        <span>{link}</span>
      </Link>
    </div>
  )
}
