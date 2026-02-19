import { TypeDiplomaItem } from '@/types/data/TypeDiplomas'
import Title from '../shared/item/title'
import Date from '../shared/item/date'
import Geo from '../shared/item/geo'
import Organism from '../shared/item/organism'

type DiplomaItemProps = {
  className?: string
  children?: React.ReactNode
  item: TypeDiplomaItem
}

export default function DiplomaItem({ className, item }: DiplomaItemProps) {
  const { title, end, geo, organism, start } = item
  return (
    <div className={`DiplomaItem grid-phi ${className ?? ''}`}>
      <div className="DiplomaItem__left">
        <Title>{title}</Title>
        <Date
          end={end}
          start={start}
        />
      </div>

      <div className="DiplomaItem__right">
        <Organism>{organism}</Organism>
        <Geo>{geo}</Geo>
      </div>
    </div>
  )
}
