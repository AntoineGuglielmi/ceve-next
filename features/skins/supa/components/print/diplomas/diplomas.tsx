import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'
import CvSection from '../cv-section/cv-section'
import { ServiceGetDiplomasSection } from '@/services/diplomas'
import SectionTitle from '../cv-section/section-title'
import List from '@/shared/components/lists/list'
import DiplomaItem from './diplomaItem'

type DiplomasProps = {
  className?: string
}

const DiplomasVariants = cva('Diplomas pt-0', {
  variants: {},
  defaultVariants: {},
})

export default async function Diplomas({ className }: DiplomasProps) {
  const { title, list } = await ServiceGetDiplomasSection()
  return (
    <CvSection className={cn(DiplomasVariants({ className }))}>
      <SectionTitle>{title}</SectionTitle>
      <List
        className="grid gap-2"
        style={{
          gridTemplateColumns: `repeat(${list?.length}, 1fr)`,
        }}
        items={list!}
        renderItem={DiplomaItem}
        getKey={(diploma) => diploma.id!}
      />
    </CvSection>
  )
}
