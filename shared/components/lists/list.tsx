import { cn } from '@/shared/lib/utils'

type ListProps<T extends object> = {
  className?: string
  items: Array<T>
  renderItem: React.ComponentType<T>
  getKey: (item: T, index: number) => React.Key
}

export default function List<T extends object>({
  className,
  items,
  renderItem: Item,
  getKey,
}: ListProps<T>) {
  return (
    <ul className={cn('List flex flex-wrap', className)}>
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
