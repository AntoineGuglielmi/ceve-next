import { data } from '@/data/antoine'
import Section from '../section/section'
import SectionTitle from '../section/section-title'
import DiplomasList from './diplomas-list'

type DiplomasProps = {
  className?: string
  children?: React.ReactNode
}

export default function Diplomas({ className }: DiplomasProps) {
  const { list, title } = data.diplomas
  return (
    <Section className={`Diplomas ${className ?? ''}`}>
      <SectionTitle>{title}</SectionTitle>
      <DiplomasList list={list} />
    </Section>
  )
}
