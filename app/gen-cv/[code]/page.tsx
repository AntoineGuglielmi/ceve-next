import Avatar from '@/components/avatar/avatar'
import Diplomas from '@/components/diplomas/diplomas'
import Experiences from '@/components/experiences/experiences'
import Follows from '@/components/follows/follows'
import HardSkills from '@/components/hard-skills/hard-skills'
import Infos from '@/components/infos/infos'
import Intro from '@/components/intro/intro'
import Misc from '@/components/misc/misc'
import More from '@/components/more/more'
import Section from '@/components/section/section'
import Column from '@/components/shared/page/column'
import Page from '@/components/shared/page/page'
import SoftSkills from '@/components/soft-skills/soft-skills'
import { ServiceGetConfig } from '@/services/config'

type GenCvCodePageProps = {
  params: Promise<{
    code: string
  }>
}

export default async function GenCvCodePage({ params }: GenCvCodePageProps) {
  const { code } = await params
  const config = await ServiceGetConfig()
  const { gen_cv_code } = config
  if (code !== gen_cv_code) {
    return (
      <Section className="h-screen flex items-center justify-center">
        <p className="text-[2rem] font-bold">Code invalide</p>
      </Section>
    )
  }

  return (
    <Page>
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
  )
}
