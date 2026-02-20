import { data } from '@/data/antoine'
import Section from '../section/section'
import SectionTitle from '../section/section-title'
import List from '@/shared/components/lists/list'
import Pill from '../shared/pill/pill'

type SoftSkillsProps = {
  className?: string
  children?: React.ReactNode
}

export default function SoftSkills({ className }: SoftSkillsProps) {
  const { title, list } = data.skills.soft
  return (
    <Section className={`SoftSkills ${className ?? ''}`}>
      <SectionTitle highlighted>{title}</SectionTitle>
      <List
        className="flex flex-wrap gap-2"
        items={list.map((item) => ({ text: item }))}
        renderItem={Pill}
        getKey={(item) => item.text}
      />
    </Section>
  )
}
