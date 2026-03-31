import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'
import { ServiceGetInfo } from '@/services/Info'
import CvSection from './cv-section'
import ItemWithIcon from './item-with-icon'
import Link from 'next/link'
import Border from './border'

type InfosProps = {
  className?: string
}

const InfosVariants = cva('Infos flex flex-col gap-2', {
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
        text={<Link href={website!}>{website}</Link>}
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
        iconName="Pin"
        size={12}
      />
      <Border
        position="bottom"
        className="left-0"
      />
    </CvSection>
  )
}
