import { data } from '@/data/antoine'
import Section from '../section/section'
import SectionTitle from '../section/section-title'
import InfoItem from './info-item'

type InfosProps = {
  className?: string
  children?: React.ReactNode
}

export default function Infos({}: InfosProps) {
  const {
    firstname,
    lastname,
    address1,
    address2,
    city,
    postalCode,
    tel,
    email,
    webSite,
  } = data.infos

  return (
    <Section className="Infos self-start">
      <SectionTitle highlighted>
        {firstname} {lastname}
      </SectionTitle>
      <div className="grid grid-cols-phi">
        <div className="col">
          <InfoItem>{address1}</InfoItem>
          {address2 && <InfoItem>{address2}</InfoItem>}
          <InfoItem>
            {postalCode}, {city}
          </InfoItem>
        </div>

        <div className="col">
          <InfoItem icon="Phone">{tel}</InfoItem>
          <InfoItem icon="Mail">{email}</InfoItem>
          <InfoItem icon="AtSign">{webSite}</InfoItem>
        </div>
      </div>
    </Section>
  )
}
