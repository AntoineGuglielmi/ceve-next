import { data } from '@/data/antoine'
import Section from '../section/section'
import SectionTitle from '../section/section-title'
import Pill from '../shared/pill/pill'
import List from '@/shared/components/lists/list'

type HardSkillsProps = {
  className?: string
  children?: React.ReactNode
}

export default function HardSkills({ className }: HardSkillsProps) {
  const { title, list } = data.skills.hard
  return (
    <Section className={`HardSkills ${className ?? ''}`}>
      <SectionTitle highlighted>{title}</SectionTitle>
      <List
        className="flex flex-wrap gap-2"
        items={list.map((skill) => ({ text: skill }))}
        renderItem={Pill}
      />
    </Section>
  )
}
