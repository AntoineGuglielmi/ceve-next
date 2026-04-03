import Experiences from '@/features/skins/gray/components/public/experiences/experiences'
import Header from '@/features/skins/gray/components/public/header/header'
import SectionGroup from '@/shared/components/section-group'

type GrayPublicViewProps = {
  params: Promise<void>
}

export default function GrayPublicView({}: GrayPublicViewProps) {
  return (
    <>
      <Header />
      <SectionGroup>
        <Experiences />
      </SectionGroup>
    </>
  )
}
