import Avatar from '@/components/avatar/avatar'
import Follows from '@/components/follows/follows'
import HardSkills from '@/components/hard-skills/hard-skills'
import Infos from '@/components/infos/infos'
import Column from '@/components/shared/page/column'
import Page from '@/components/shared/page/page'
import SofSkills from '@/components/sof-skills/sof-skills'

export default function Home() {
  return (
    <Page>
      <Column className="bg-cv-anthracite text-cv-blanc">
        <Avatar />
        <Follows />
        <HardSkills />
        <SofSkills />
      </Column>

      <Column>
        <Infos />
      </Column>
    </Page>
  )
}
