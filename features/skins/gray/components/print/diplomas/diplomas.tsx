import Section from '../section/section'
import SectionTitle from '../section/section-title'
import List from '@/shared/components/lists/list'
import DiplomaItem from './diploma-item'
import { ServiceGetDiplomasSection } from '@/services/diplomas'

type DiplomasProps = {
  className?: string
  children?: React.ReactNode
}

export default async function Diplomas({ className }: DiplomasProps) {
  const diplomasSection = await ServiceGetDiplomasSection()

  const { list, title } = diplomasSection

  return (
    <Section className={`Diplomas ${className ?? ''}`}>
      <SectionTitle>{title}</SectionTitle>
      <List
        className="flex flex-col gap-4 flex-nowrap"
        items={list!}
        renderItem={DiplomaItem}
        getKey={(item) => item.geo!}
      />
    </Section>
  )
}
