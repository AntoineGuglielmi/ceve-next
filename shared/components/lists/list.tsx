import { cn } from '@/shared/lib/utils'
import { HTMLAttributes } from 'react'

type ListProps<T extends object> = {
  className?: string
  items: Array<T>
  renderItem: React.ComponentType<T>
  getKey: (item: T, index: number) => React.Key
  style?: HTMLAttributes<T>['style']
}

export default function List<T extends object>({
  className,
  items,
  renderItem: Item,
  getKey,
  style,
}: ListProps<T>) {
  return (
    <ul
      className={cn('List', className)}
      {...(style ? { style } : {})}
    >
      {items.map((item, index) => {
        return (
          <li key={getKey(item, index)}>
            <Item {...item} />
          </li>
        )
      })}
    </ul>
  )
}
