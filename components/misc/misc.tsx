import { data } from '@/data/antoine'
import Section from '../section/section'
import SectionTitle from '../section/section-title'
import List from '@/shared/components/lists/list'
import Pill from '../shared/pill/pill'

type MiscProps = {
  className?: string
  children?: React.ReactNode
}

export default function Misc({ className }: MiscProps) {
  const { list, title } = data.misc

  return (
    <Section className={`Misc ${className ?? ''}`}>
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
