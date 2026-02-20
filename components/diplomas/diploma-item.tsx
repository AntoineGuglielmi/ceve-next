import { TypeDiplomaItem } from '@/types/data/TypeDiplomas'
import Title from '../shared/item/title'
import Date from '../shared/item/date'
import Geo from '../shared/item/geo'
import Organism from '../shared/item/organism'

type DiplomaItemProps = {
  className?: string
  children?: React.ReactNode
  title: TypeDiplomaItem['title']
  organism: TypeDiplomaItem['organism']
  start: TypeDiplomaItem['start']
  end: TypeDiplomaItem['end']
  geo: TypeDiplomaItem['geo']
  desc: TypeDiplomaItem['desc']
}

export default function DiplomaItem({
  className,
  end,
  geo,
  organism,
  start,
  title,
}: DiplomaItemProps) {
  return (
    <div className={`DiplomaItem grid grid-cols-phi ${className ?? ''}`}>
      <div className="DiplomaItem__left flex flex-col">
        <Title>{title}</Title>
        <Date
          end={end}
          start={start}
        />
      </div>

      <div className="DiplomaItem__right flex flex-col">
        <Organism>{organism}</Organism>
        <Geo>{geo}</Geo>
      </div>
    </div>
  )
}
