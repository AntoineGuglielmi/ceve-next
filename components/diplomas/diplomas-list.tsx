import { TypeDiplomas } from '@/types/data/TypeDiplomas'
import DiplomaItem from './diploma-item'

type DiplomasListProps = {
  className?: string
  children?: React.ReactNode
  list: TypeDiplomas['list']
}

export default function DiplomasList({ className, list }: DiplomasListProps) {
  return (
    <ul className={`DimplomasList flex flex-col gap-4 ${className ?? ''}`}>
      {list.map((diploma, index) => (
        <li key={index}>
          <DiplomaItem item={diploma} />
        </li>
      ))}
    </ul>
  )
}
