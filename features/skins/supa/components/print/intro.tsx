import { ServiceGetIntro } from '@/services/Intro'
import { cn } from '@/shared/lib/utils'
import Image from 'next/image'
import { ServiceGetInfo } from '@/services/Info'
import CvSection from './cv-section/cv-section'
import SectionTitle from './cv-section/section-title'

type IntroProps = {
  className?: string
  children?: React.ReactNode
}

export default async function Intro({ className }: IntroProps) {
  const infos = await ServiceGetInfo()
  const intro = await ServiceGetIntro()
  const { firstname, lastname, picture } = infos
  const { title, text } = intro
  const { alternativeText, url } = picture!
  return (
    <CvSection className={cn('Intro flex flex-col gap-2', className)}>
      <div className="AvatarContainer size-16 rounded-full overflow-hidden flex items-center justify-center relative">
        <Image
          fill
          alt={alternativeText}
          src={`${process.env.STRAPI_BASE_URL}${url}`}
          unoptimized
          loading="eager"
          className="object-cover scale-150 mt-2 -ml-1"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="fz-5 font-bold">
          {firstname} {lastname}
        </h1>
        <SectionTitle
          variant="accent"
          className="mb-0"
        >
          {title}
        </SectionTitle>
        <p>{text}</p>
      </div>
    </CvSection>
  )
}
