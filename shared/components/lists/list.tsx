import { cn } from '@/shared/lib/utils'

type ListProps<T extends object> = {
  className?: string
  items: Array<T>
  renderItem: React.ComponentType<T>
}

export default function List<T extends object>({
  className,
  items,
  renderItem: Item,
}: ListProps<T>) {
  return (
    <ul className={cn('Inline flex flex-wrap', className)}>
      {items.map((item, index) => {
        return (
          <li key={index}>
            <Item {...item} />
          </li>
        )
      })}
    </ul>
  )
}
