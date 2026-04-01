import GenerateCv from '@/components/generate-cv/generate-cv'
import Border from '@/features/skins/supa/components/border'
import ColorfulBackground from '@/features/skins/supa/components/colorful-background/colorful-background'
import CvSection from '@/features/skins/supa/components/cv-section/cv-section'
import Experience from '@/features/skins/supa/components/experience/experience'
import HighlightedProjects from '@/features/skins/supa/components/highlighted-projects/highlighted-projects'
import Infos from '@/features/skins/supa/components/infos'
import Intro from '@/features/skins/supa/components/intro'
import Langages from '@/features/skins/supa/components/langages'
import More from '@/features/skins/supa/components/more'
import Page from '@/features/skins/supa/components/page'
import PageSection from '@/features/skins/supa/components/page-section'
import Socials from '@/features/skins/supa/components/socials'
import { checkCode } from '@/shared/lib/chechCode'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

type SupaPageProps = {
  params: Promise<{
    code: string
  }>
}

export default async function SupaPage({ params }: SupaPageProps) {
  const { code } = await params
  await checkCode(code)

  return (
    <main className="bg-white text-[11px] text-cv-anthracite flex items-center justify-center">
      <GenerateCv
        code={code}
        className="fixed top-4 left-4 px-2 py-1 fz-4 font-bold bg-cv-orange rounded-lg"
      >
        Générer le CV
      </GenerateCv>

      <Page>
        <PageSection className="relative">
          <ColorfulBackground className="inset-0 z-10" />

          <Intro />

          <Border
            className="relative"
            position="bottom"
          />

          <Infos />

          <Border
            className="relative"
            position="bottom"
          />

          <Socials />

          <Border
            className="relative"
            position="bottom"
          />

          <Langages />

          <Border
            className="relative"
            position="bottom"
          />

          <More />
        </PageSection>

        <Border
          position="right"
          className="relative"
        />

        <PageSection>
          <Experience />
          <HighlightedProjects />
          <CvSection className="pt-0">Hello</CvSection>
        </PageSection>
      </Page>
    </main>
  )
}
