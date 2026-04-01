import GenerateCv from '@/components/generate-cv/generate-cv'
import Border from '@/features/skins/supa/components/border'
import ColorfulBackground from '@/features/skins/supa/components/colorful-background/colorful-background'
import Infos from '@/features/skins/supa/components/infos'
import Intro from '@/features/skins/supa/components/intro'
import Misc from '@/features/skins/supa/components/misc'
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
    <main className="bg-slate-50 text-[11px] text-cv-anthracite flex items-center justify-center">
      <GenerateCv
        code={code}
        className="fixed top-4 left-4 px-2 py-1 fz-4 font-bold bg-cv-orange rounded-lg"
      >
        Générer le CV
      </GenerateCv>

      <Page>
        <PageSection className="relative">
          <ColorfulBackground className="inset-0 z-10" />
          <Border position="right" />
          <Intro />
          <Infos />
          <Socials />
        </PageSection>

        <PageSection>Hello</PageSection>
      </Page>
    </main>
  )
}
