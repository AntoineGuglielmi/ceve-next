import Section from '../section/section'
import SectionTitle from '../section/section-title'
import List from '@/shared/components/lists/list'
import Pill from '../shared/pill/pill'
import { ServiceGetSoftSkillsSection } from '@/services/skills'

type SoftSkillsProps = {
  className?: string
  children?: React.ReactNode
}

export default async function SoftSkills({ className }: SoftSkillsProps) {
  const softSkillsSection = await ServiceGetSoftSkillsSection()
  const { title, list } = softSkillsSection
  return (
    <Section className={`SoftSkills ${className ?? ''}`}>
      <SectionTitle highlighted>{title}</SectionTitle>
      <List
        className="flex flex-wrap gap-2"
        items={list!}
        renderItem={Pill}
        getKey={(item) => item.text!}
      />
    </Section>
  )
}
