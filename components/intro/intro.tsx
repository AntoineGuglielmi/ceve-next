import { data } from '@/data/antoine'
import Section from '../section/section'
import SectionTitle from '../section/section-title'

type IntroProps = {
  className?: string
  children?: React.ReactNode
}

export default function Intro({ className }: IntroProps) {
  const { title, text } = data.intro

  return (
    <Section className={`Intro ${className ?? ''}`}>
      <SectionTitle>{title}</SectionTitle>
      <p>{text}</p>
    </Section>
  )
}
