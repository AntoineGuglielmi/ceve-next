import { data } from '@/data/antoine'
import Section from '../section/section'
import SectionTitle from '../section/section-title'
import FollowList from './follow-list'

type FollowsProps = {
  className?: string
  children?: React.ReactNode
}

export default function Follows({ className, children }: FollowsProps) {
  const { title, list } = data.follows

  return (
    <Section className={`Follows ${className ?? ''}`}>
      <SectionTitle highlighted>{title}</SectionTitle>

      <FollowList list={list} />
    </Section>
  )
}
