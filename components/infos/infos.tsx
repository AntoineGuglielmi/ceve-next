import Section from '../section/section'
import SectionTitle from '../section/section-title'
import InfoItem from './info-item'
import { ServiceGetInfo } from '@/services/Info'

type InfosProps = {
  className?: string
  children?: React.ReactNode
}

export default async function Infos({}: InfosProps) {
  const infos = await ServiceGetInfo()
  const {
    firstname,
    lastname,
    address1,
    address2,
    city,
    postalCode,
    phone,
    email,
    website,
  } = infos

  return (
    <Section className="Infos self-start">
      <SectionTitle highlighted>
        {firstname} {lastname}
      </SectionTitle>
      <div className="grid grid-cols-phi gap-4">
        <div className="col">
          <InfoItem>{address1}</InfoItem>
          {address2 && <InfoItem>{address2}</InfoItem>}
          <InfoItem>
            {postalCode}, {city}
          </InfoItem>
        </div>

        <div className="col">
          <InfoItem icon="Phone">{phone}</InfoItem>
          <InfoItem icon="Mail">{email}</InfoItem>
          <InfoItem icon="AtSign">{website}</InfoItem>
        </div>
      </div>
    </Section>
  )
}
