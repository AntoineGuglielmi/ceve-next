import { TypeFollows } from '@/types/data/TypeFollows'
import FollowItem from './follow-item'

type FollowListProps = {
  className?: string
  children?: React.ReactNode
  list: TypeFollows['list']
}

export default function FollowList({ className, list }: FollowListProps) {
  return (
    <ul className={`FollowList flex flex-col gap-2 ${className ?? ''}`}>
      {list.map((item) => {
        return (
          <li key={item.link}>
            <FollowItem item={item} />
          </li>
        )
      })}
    </ul>
  )
}
