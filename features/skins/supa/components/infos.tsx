import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'
import { ServiceGetInfo } from '@/services/Info'
import ItemWithIcon from './item-with-icon'
import Link from 'next/link'
import CvSection from './cv-section/cv-section'

type InfosProps = {
  className?: string
}

const InfosVariants = cva('Infos flex flex-col gap-3', {
  variants: {},
  defaultVariants: {},
})

export default async function Infos({ className }: InfosProps) {
  const infos = await ServiceGetInfo()
  const { email, website, phone, city, postalCode } = infos
  return (
    <CvSection className={cn(InfosVariants({ className }))}>
      <ItemWithIcon
        text={email!}
        title="Email"
        iconName="Mail"
        size={12}
      />
      <ItemWithIcon
        text={
          <Link
            target="_blank"
            href={website!}
          >
            {website}
          </Link>
        }
        title="Site web"
        iconName="Link"
        size={12}
      />
      <ItemWithIcon
        text={phone!}
        title="Téléphone"
        iconName="Phone"
        size={12}
      />
      <ItemWithIcon
        text={city! + ', ' + postalCode!}
        title="Adresse"
        iconName="MapPin"
        size={12}
      />
    </CvSection>
  )
}
