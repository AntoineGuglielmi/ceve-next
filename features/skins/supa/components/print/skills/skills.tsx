import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'
import { ServiceGetSkillsSection } from '@/services/skills'
import CvSection from '../cv-section/cv-section'
import SectionTitle from '../cv-section/section-title'
import SkillItem from './skill-item'
import List from '@/shared/components/lists/list'

type SkillsProps = {
  className?: string
  children?: React.ReactNode
}

const SkillsVariants = cva('Skills pt-0', {
  variants: {},
  defaultVariants: {},
})

export default async function Skills({ className }: SkillsProps) {
  const { title, skills } = await ServiceGetSkillsSection()
  return (
    <CvSection className={cn(SkillsVariants({ className }))}>
      <SectionTitle>{title}</SectionTitle>
      <List
        items={skills!}
        renderItem={SkillItem}
        getKey={(skill) => skill.id!}
        itemExtraProps={{ level: 0 as 0 | 1 | 2 }}
        className="grid gap-2"
        style={{
          gridTemplateColumns: `repeat(${skills?.length},1fr)`,
        }}
      />
    </CvSection>
  )
}
