import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'
import { ServiceGetExperiencesSection } from '@/services/experiences'
import CvSection from '../cv-section/cv-section'
import SectionTitle from '../cv-section/section-title'
import List from '@/shared/components/lists/list'
import ExperienceItem from './experience-item'

type ExperienceProps = {
  className?: string
}

const ExperienceVariants = cva('Experience', {
  variants: {},
  defaultVariants: {},
})

export default async function Experience({ className }: ExperienceProps) {
  const { title, list: experiences } = await ServiceGetExperiencesSection()
  return (
    <CvSection className={cn(ExperienceVariants({ className }))}>
      <SectionTitle>{title}</SectionTitle>
      <List
        items={experiences!}
        renderItem={ExperienceItem}
        getKey={(exp) => exp.id!}
        className="flex flex-col gap-3"
      />
    </CvSection>
  )
}
