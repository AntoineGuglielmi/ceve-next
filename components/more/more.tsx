import { ServiceGetPlusSection } from '@/services/plus'
import Section from '../section/section'
import SectionTitle from '../section/section-title'
import QrCode from './qr-code'

type MoreProps = {
  className?: string
  children?: React.ReactNode
}

export default async function More({ className }: MoreProps) {
  const plusSection = await ServiceGetPlusSection()
  const { title, text, link } = plusSection
  return (
    <Section className={`More ${className ?? ''}`}>
      <SectionTitle highlighted>{title}</SectionTitle>
      <div className="More__content flex gap-4">
        <p>{text}</p>
        <QrCode link={link!} />
      </div>
    </Section>
  )
}
