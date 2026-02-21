import { data } from '@/data/antoine'
import Section from '../section/section'
import SectionTitle from '../section/section-title'
import Pill from '../shared/pill/pill'
import List from '@/shared/components/lists/list'
import { ServiceGetHardSkillsSection } from '@/services/skills'

type HardSkillsProps = {
  className?: string
  children?: React.ReactNode
}

export default async function HardSkills({ className }: HardSkillsProps) {
  const hardSkillsSection = await ServiceGetHardSkillsSection()

  const { title, list } = hardSkillsSection

  return (
    <Section className={`HardSkills ${className ?? ''}`}>
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
