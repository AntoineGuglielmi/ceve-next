import InfoItem from '@/components/infos/info-item'
import SectionTitle from '@/components/section/section-title'
import Title from '@/components/shared/item/title'
import Section from '@/shared/components/section'
import { Info } from '@/types/strapi-types'

type InfosProps = {
  className?: string
  children?: React.ReactNode
} & Partial<Info>

export default function Infos({
  className,
  children,
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
