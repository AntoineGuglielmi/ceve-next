import { TypeMisc } from '@/types/data/TypeMisc'
import MiscItem from './misc-item'

type MiscListProps = {
  className?: string
  children?: React.ReactNode
  list: TypeMisc['list']
}

export default function MiscList({ className, list }: MiscListProps) {
  return (
    <ul className={`MiscList flex flex-wrap gap-2 ${className ?? ''}`}>
      {list.map((misc) => {
        return (
          <li key={misc}>
            <MiscItem>{misc}</MiscItem>
          </li>
        )
      })}
    </ul>
  )
}
