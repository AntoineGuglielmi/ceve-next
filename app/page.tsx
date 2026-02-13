import Avatar from '@/components/avatar/avatar'
import Experiences from '@/components/experiences/experiences'
import Follows from '@/components/follows/follows'
import HardSkills from '@/components/hard-skills/hard-skills'
import Infos from '@/components/infos/infos'
import Intro from '@/components/intro/intro'
import Misc from '@/components/misc/misc'
import More from '@/components/more/more'
import Column from '@/components/shared/page/column'
import Page from '@/components/shared/page/page'
import SoftSkills from '@/components/soft-skills/soft-skills'

export default function Home() {
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
      </Column>
    </Page>
  )
}
