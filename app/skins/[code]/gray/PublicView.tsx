import Experiences from '@/features/more/components/experiences/experiences'
import Header from '@/features/more/components/header/header'
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
