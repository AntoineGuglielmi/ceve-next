import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'
import { ServiceGetHighlightedProjects } from '@/services/projects'
import CvSection from '../cv-section/cv-section'
import SectionTitle from '../cv-section/section-title'
import { AtomsHighlightedProject, Project } from '@/types/strapi-types'
import List from '@/shared/components/lists/list'

type HighlightedProjectsProps = {
  className?: string
}

const HighlightedProjectsVariants = cva('HighlightedProjects pt-0', {
  variants: {},
  defaultVariants: {},
})

const ProjectItem = ({ title, link, short_desc }: Project) => {
  return (
    <div className="flex flex-col gap-1 p-2 tile transition h-full">
      <h3 className="font-bold">{title}</h3>
      <p>{short_desc}</p>
    </div>
  )
}

export default async function HighlightedProjects({
  className,
}: HighlightedProjectsProps) {
  const { list, title } = await ServiceGetHighlightedProjects()
  const projects = list.map(({ project }: AtomsHighlightedProject) => project)
  return (
    <CvSection className={cn(HighlightedProjectsVariants({ className }))}>
      <SectionTitle>{title}</SectionTitle>
      <List
        className="grid grid-cols-[1fr_1fr] gap-2"
        items={projects}
        renderItem={ProjectItem}
        getKey={(project) => project.id!}
      />
    </CvSection>
  )
}
