import { data } from '@/data/antoine'
import Section from '../section/section'
import SectionTitle from '../section/section-title'
import List from '@/shared/components/lists/list'
import DiplomaItem from './diploma-item'

type DiplomasProps = {
  className?: string
  children?: React.ReactNode
}

export default function Diplomas({ className }: DiplomasProps) {
  const { list, title } = data.diplomas
  return (
    <Section className={`Diplomas ${className ?? ''}`}>
      <SectionTitle>{title}</SectionTitle>
      <List
        className="flex flex-col gap-4 flex-nowrap"
        items={list}
        renderItem={DiplomaItem}
        getKey={(item) => item.geo}
      />
    </Section>
  )
}
