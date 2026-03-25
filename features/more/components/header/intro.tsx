import Section from '@/shared/components/section'
import { cn } from '@/shared/lib/utils'
import { Intro as IntroSection } from '@/types/strapi-types'
import SectionTitle from '../section/section-title'

type IntroProps = {
  className?: string
  children?: React.ReactNode
} & Partial<IntroSection>

export default function Intro({
  className,
  children,
  text,
  title,
}: IntroProps) {
  return (
    <Section className={cn('Intro ', className)}>
      <SectionTitle>{title}</SectionTitle>
      <p>{text}</p>
    </Section>
  )
}
