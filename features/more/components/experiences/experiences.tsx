import SectionTitle from '@/components/section/section-title'
import Section from '@/shared/components/section'
import { ServiceGetExperiencesSection } from '@/services/experiences'
import List from '@/shared/components/lists/list'
import ExperienceItem from './experience-item'

type ExperiencesProps = {
  className?: string
  children?: React.ReactNode
}

export default async function Experiences({
  className,
  children,
}: ExperiencesProps) {
  const { title, list } = await ServiceGetExperiencesSection()
  return (
    <Section className={`Experiences ${className ?? ''}`}>
      <SectionTitle>{title}</SectionTitle>
      <List
        className="flex flex-col my-4 gap-4"
        items={list!}
        getKey={(item) => item.id!}
        renderItem={ExperienceItem}
      />
    </Section>
  )
}
