import { data } from '@/data/antoine'
import Section from '../section/section'
import SectionTitle from '../section/section-title'
import MiscList from './misc-list'

type MiscProps = {
  className?: string
  children?: React.ReactNode
}

export default function Misc({ className }: MiscProps) {
  const { list, title } = data.misc

  return (
    <Section className={`Misc ${className ?? ''}`}>
      <SectionTitle highlighted>{title}</SectionTitle>
      <MiscList list={list} />
    </Section>
  )
}
