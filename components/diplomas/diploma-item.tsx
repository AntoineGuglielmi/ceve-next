import { TypeDiplomaItem } from '@/types/data/TypeDiplomas'
import Title from '../shared/item/title'
import Date from '../shared/item/date'
import Geo from '../shared/item/geo'
import Organism from '../shared/item/organism'
import { MoleculesDiplomaItem } from '@/types/strapi-types'

type DiplomaItemProps = {
  className?: string
  children?: React.ReactNode
  title?: MoleculesDiplomaItem['title']
  organism?: MoleculesDiplomaItem['organism']
  start?: MoleculesDiplomaItem['start']
  end?: MoleculesDiplomaItem['end']
  geo?: MoleculesDiplomaItem['geo']
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
    <div className={`DiplomaItem grid grid-cols-phi gap-4 ${className ?? ''}`}>
      <div className="DiplomaItem__left flex flex-col">
        <Title>{title}</Title>
        <Date
          end={end!}
          start={start!}
        />
      </div>

      <div className="DiplomaItem__right flex flex-col">
        <Organism>{organism}</Organism>
        <Geo>{geo}</Geo>
      </div>
    </div>
  )
}
