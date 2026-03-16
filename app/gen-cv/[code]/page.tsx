import Avatar from '@/components/avatar/avatar'
import Diplomas from '@/components/diplomas/diplomas'
import Experiences from '@/components/experiences/experiences'
import Follows from '@/components/follows/follows'
import GenerateCv from '@/components/generate-cv/generate-cv'
import HardSkills from '@/components/hard-skills/hard-skills'
import Infos from '@/components/infos/infos'
import Intro from '@/components/intro/intro'
import Misc from '@/components/misc/misc'
import More from '@/components/more/more'
import Column from '@/components/shared/page/column'
import Page from '@/components/shared/page/page'
import SoftSkills from '@/components/soft-skills/soft-skills'
import { ServiceGetGlobalMeta } from '@/services/global-meta'
import { checkCode } from '@/shared/lib/chechCode'
import { formatToYYMMDD } from '@/shared/lib/dates'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

type GenCvCodePageProps = {
  params: Promise<{
    code: string
  }>
}

export default async function GenCvCodePage({ params }: GenCvCodePageProps) {
  const { code } = await params
  await checkCode(code)
  // const { lastDatabaseUpdate } = await ServiceGetGlobalMeta()
  // const cvDate = formatToYYMMDD(String(lastDatabaseUpdate)!)

  return (
    <main className="bg-slate-50 text-[11px] text-cv-anthracite flex items-center justify-center">
      <GenerateCv
        code={code}
        className="fixed top-4 left-4 px-2 py-1 text-[1rem] font-bold bg-cv-orange rounded-lg"
      >
        Générer le CV
      </GenerateCv>
      <Page id="cv">
        <Column className="bg-cv-anthracite text-cv-blanc ">
          <Avatar />
          <Column className="p-4 gap-6">
            <Follows />
            <HardSkills />
            <SoftSkills />
            <Misc />
            <More />
          </Column>
        </Column>

        <Column className="p-4 gap-6">
          <Infos />
          <Intro />
          <Experiences />
          <Diplomas />
        </Column>
      </Page>
    </main>
  )
}
