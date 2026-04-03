import Avatar from '@/components/avatar/avatar'
import Diplomas from '@/components/diplomas/diplomas'
import Experiences from '@/components/experiences/experiences'
import Follows from '@/components/follows/follows'
import HardSkills from '@/components/hard-skills/hard-skills'
import Infos from '@/components/infos/infos'
import Intro from '@/components/intro/intro'
import Misc from '@/components/misc/misc'
import More from '@/components/more/more'
import Column from '@/components/shared/page/column'
import SoftSkills from '@/components/soft-skills/soft-skills'
import A4 from '@/shared/components/page/a4'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

type GrayPrintViewProps = object

export default async function GrayPrintView({}: GrayPrintViewProps) {
  return (
    <A4 className="grid grid-cols-phi">
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
    </A4>
  )
}
