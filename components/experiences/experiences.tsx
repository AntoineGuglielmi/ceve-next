import { data } from '@/data/antoine'
import Section from '../section/section'
import SectionTitle from '../section/section-title'
import List from '@/shared/components/lists/list'
import ExperienceItem from './experience-item'

type ExperiencesProps = {
  className?: string
  children?: React.ReactNode
}

export default function Experiences({ className }: ExperiencesProps) {
  const { list, title } = data.experiences

  return (
    <Section className={`Experiences ${className ?? ''}`}>
      <SectionTitle>{title}</SectionTitle>
      <List
        className="flex flex-col gap-4"
        items={list}
        renderItem={ExperienceItem}
      />
    </Section>
  )
}
