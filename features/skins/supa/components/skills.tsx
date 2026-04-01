import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'
import {
  ServiceGetHardSkillsSection,
  ServiceGetSoftSkillsSection,
} from '@/services/skills'
import CvSection from './cv-section'
import ItemWithIcon from './item-with-icon'

type SkillsProps = {
  className?: string
  children?: React.ReactNode
}

const SkillsVariants = cva('Skills flex gap-2 flex-wrap', {
  variants: {},
  defaultVariants: {},
})

export default async function Skills({ className }: SkillsProps) {
  const hardSkills = await ServiceGetHardSkillsSection()
  const softSkills = await ServiceGetSoftSkillsSection()
  const { list: hardSkillsList } = hardSkills
  const { list: softSkillsList } = softSkills
  const list = [
    ...(hardSkillsList!.filter((skill) => skill.show) ?? []),
    ...(softSkillsList!.filter((skill) => skill.show) ?? []),
  ]
  return (
    <CvSection className={cn(SkillsVariants({ className }))}>
      {list!.map(({ id, text }) => (
        <ItemWithIcon
          text={text}
          key={id}
        />
      ))}
    </CvSection>
  )
}
