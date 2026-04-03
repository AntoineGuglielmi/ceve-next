import Section from '../section/section'
import SectionTitle from '../section/section-title'
import List from '@/shared/components/lists/list'
import ExperienceItem from './experience-item'
import { ServiceGetExperiencesSection } from '@/services/experiences'

type ExperiencesProps = {
  className?: string
  children?: React.ReactNode
}

export default async function Experiences({ className }: ExperiencesProps) {
  const experiencesSection = await ServiceGetExperiencesSection()
  const { list, title } = experiencesSection

  return (
    <Section className={`Experiences ${className ?? ''}`}>
      <SectionTitle>{title}</SectionTitle>
      <List
        className="flex flex-col gap-4"
        items={list!}
        renderItem={ExperienceItem}
        getKey={(item) => item.title!}
      />
    </Section>
  )
}
