import Experiences from '@/features/more/components/experiences/experiences'
import Header from '@/features/more/components/header/header'
import SectionGroup from '@/shared/components/section-group'

type MorePageProps = {
  params: Promise<void>
}

export const dynamic = 'force-dynamic'

export default function MorePage({}: MorePageProps) {
  return (
    <main className="flex @container/main flex-col text-cv-anthracite w-full max-w-[21cm] mx-auto shadow-[0_0_0.5rem_0_rgba(0,0,0,0.15)] bg-cv-blanc ">
      <Header />
      <SectionGroup>
        <Experiences />
      </SectionGroup>
    </main>
  )
}
