import Border from '@/features/skins/supa/components/print/border'
import ColorfulBackground from '@/features/skins/supa/components/print/colorful-background/colorful-background'
import Diplomas from '@/features/skins/supa/components/print/diplomas/diplomas'
import Experience from '@/features/skins/supa/components/print/experience/experience'
import HighlightedProjects from '@/features/skins/supa/components/print/highlighted-projects/highlighted-projects'
import Infos from '@/features/skins/supa/components/print/infos'
import Intro from '@/features/skins/supa/components/print/intro'
import Langages from '@/features/skins/supa/components/print/langages'
import More from '@/features/skins/supa/components/print/more'
import PageSection from '@/features/skins/supa/components/print/page-section'
import Skills from '@/features/skins/supa/components/print/skills/skills'
import Socials from '@/features/skins/supa/components/print/socials'
import A4 from '@/shared/components/page/a4'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

type SupaPrintViewProps = object

export default async function SupaPrintView({}: SupaPrintViewProps) {
  return (
    <A4 className="grid grid-cols-base">
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

        <Diplomas />

        <Skills />
      </PageSection>
    </A4>
  )
}
