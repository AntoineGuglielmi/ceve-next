import Section from '../section/section'
import SectionTitle from '../section/section-title'
import List from '@/shared/components/lists/list'
import Pill from '../shared/pill/pill'
import { ServiceGetMiscSection } from '@/services/misc'

type MiscProps = {
  className?: string
  children?: React.ReactNode
}

export default async function Misc({ className }: MiscProps) {
  const miscSection = await ServiceGetMiscSection()
  const { list, title } = miscSection

  return (
    <Section className={`Misc ${className ?? ''}`}>
      <SectionTitle highlighted>{title}</SectionTitle>
      <List
        className="flex flex-wrap gap-2"
        items={list!}
        renderItem={Pill}
        getKey={(item) => item.text!}
      />
    </Section>
  )
}
