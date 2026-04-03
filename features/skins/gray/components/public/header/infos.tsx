import Section from '@/shared/components/section'
import { Info } from '@/types/strapi-types'
import SectionTitle from '../section/section-title'
import InfoItem from '../../shared/info-item'

type InfosProps = {
  className?: string
  children?: React.ReactNode
} & Partial<Info>

export default function Infos({
  className,
  city,
  firstname,
  lastname,
  postalCode,
  email,
}: InfosProps) {
  return (
    <Section className={`Infos ${className ?? ''}`}>
      <SectionTitle highlighted>
        {firstname} {lastname}
      </SectionTitle>
      <div>
        <InfoItem icon="Mail">{email}</InfoItem>
        <InfoItem icon="MapPin">
          {city}, {postalCode}
        </InfoItem>
      </div>
    </Section>
  )
}
