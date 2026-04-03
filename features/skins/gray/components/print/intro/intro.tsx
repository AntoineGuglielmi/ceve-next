import Section from '../section/section'
import SectionTitle from '../section/section-title'
import { ServiceGetIntro } from '@/services/Intro'

type IntroProps = {
  className?: string
  children?: React.ReactNode
}

export default async function Intro({ className }: IntroProps) {
  const intro = await ServiceGetIntro()
  const { title, text } = intro

  return (
    <Section className={`Intro ${className ?? ''}`}>
      <SectionTitle>{title}</SectionTitle>
      <p>{text}</p>
    </Section>
  )
}
