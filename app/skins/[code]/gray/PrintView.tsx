import Experiences from '@/features/skins/gray/components/print/experiences/experiences'
import HardSkills from '@/features/skins/gray/components/print/hard-skills/hard-skills'
import Intro from '@/features/skins/gray/components/print/intro/intro'
import Misc from '@/features/skins/gray/components/print/misc/misc'
import More from '@/features/skins/gray/components/print/more/more'
import Column from '@/features/skins/gray/components/print/shared/page/column'
import A4 from '@/shared/components/page/a4'
import Avatar from '@/features/skins/gray/components/print/avatar/avatar'
import Diplomas from '@/features/skins/gray/components/print/diplomas/diplomas'
import Follows from '@/features/skins/gray/components/print/follows/follows'
import SoftSkills from '@/features/skins/gray/components/print/soft-skills/soft-skills'
import Infos from '@/features/skins/gray/components/print/infos/infos'

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
