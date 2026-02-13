import { data } from '@/data/antoine'
import Section from '../section/section'
import SectionTitle from '../section/section-title'
import SkillsList from '../shared/skills/skills-list'

type SofSkillsProps = {
  className?: string
  children?: React.ReactNode
}

export default function SofSkills({ className, children }: SofSkillsProps) {
  const { title, list } = data.skills.soft
  return (
    <Section className={`SofSkills ${className ?? ''}`}>
      <SectionTitle highlighted>{title}</SectionTitle>
      <SkillsList list={list} />
    </Section>
  )
}
