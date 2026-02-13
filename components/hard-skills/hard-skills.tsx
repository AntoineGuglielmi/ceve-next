import { data } from '@/data/antoine'
import Section from '../section/section'
import SectionTitle from '../section/section-title'
import SkillsList from '../skills/skills-list'

type HardSkillsProps = {
  className?: string
  children?: React.ReactNode
}

export default function HardSkills({ className, children }: HardSkillsProps) {
  const { title, list } = data.skills.hard
  return (
    <Section className={`HardSkills ${className ?? ''}`}>
      <SectionTitle highlighted>{title}</SectionTitle>
      <SkillsList list={list} />
    </Section>
  )
}
