import Avatar from '@/components/avatar/avatar'
import Follows from '@/components/follows/follows'
import HardSkills from '@/components/hard-skills/hard-skills'
import Infos from '@/components/infos/infos'
import Misc from '@/components/misc/misc'
import More from '@/components/more/more'
import Column from '@/components/shared/page/column'
import Page from '@/components/shared/page/page'
import SoftSkills from '@/components/soft-skills/soft-skills'

export default function Home() {
  return (
    <Page>
      <Column className="bg-cv-anthracite text-cv-blanc">
        <Avatar />
        <Follows />
        <HardSkills />
        <SoftSkills />
        <Misc />
        <More />
      </Column>

      <Column>
        <Infos />
      </Column>
    </Page>
  )
}
