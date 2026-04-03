import List from '@/shared/components/lists/list'
import { ServiceGetFollowSection } from '@/services/follows'
import FollowItem from './follow-item'
import Section from '../section/section'
import SectionTitle from '../section/section-title'

type FollowsProps = {
  className?: string
  children?: React.ReactNode
}

export default async function Follows({ className }: FollowsProps) {
  const followSection = await ServiceGetFollowSection()
  const { title, list } = followSection

  return (
    <Section className={`Follows ${className ?? ''}`}>
      <SectionTitle highlighted>{title}</SectionTitle>

      <List
        items={list!}
        renderItem={FollowItem}
        getKey={(item) => item.link!}
      />
    </Section>
  )
}
