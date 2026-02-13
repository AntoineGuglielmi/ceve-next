import { data } from '@/data/antoine'
import Section from '../section/section'
import SectionTitle from '../section/section-title'
import ExperiencesList from './experiences-list'

type ExperiencesProps = {
  className?: string
  children?: React.ReactNode
}

export default function Experiences({ className }: ExperiencesProps) {
  const { list, title } = data.experiences

  return (
    <Section className={`Experiences ${className ?? ''}`}>
      <SectionTitle>{title}</SectionTitle>
      <ExperiencesList list={list} />
    </Section>
  )
}
