import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'
import { ServiceGetPlusSection } from '@/services/plus'
import CvSection from './cv-section/cv-section'
import QrCode from '@/shared/components/qr-code'

type MoreProps = {
  className?: string
}

const MoreVariants = cva('More flex flex-col gap-2', {
  variants: {},
  defaultVariants: {},
})

export default async function More({ className }: MoreProps) {
  const more = await ServiceGetPlusSection()
  const { text, link } = more
  return (
    <CvSection className={cn(MoreVariants({ className }))}>
      <p className="">{text}</p>
      <QrCode
        link={link!}
        darkColor="#a578e886"
      />
    </CvSection>
  )
}
