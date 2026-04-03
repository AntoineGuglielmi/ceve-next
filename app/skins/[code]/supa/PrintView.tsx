import Border from '@/features/skins/supa/components/border'
import ColorfulBackground from '@/features/skins/supa/components/colorful-background/colorful-background'
import Diplomas from '@/features/skins/supa/components/diplomas/diplomas'
import Experience from '@/features/skins/supa/components/experience/experience'
import HighlightedProjects from '@/features/skins/supa/components/highlighted-projects/highlighted-projects'
import Infos from '@/features/skins/supa/components/infos'
import Intro from '@/features/skins/supa/components/intro'
import Langages from '@/features/skins/supa/components/langages'
import More from '@/features/skins/supa/components/more'
import Page from '@/features/skins/supa/components/page'
import PageSection from '@/features/skins/supa/components/page-section'
import Skills from '@/features/skins/supa/components/skills/skills'
import Socials from '@/features/skins/supa/components/socials'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

type SupaPrintViewProps = object

export default async function SupaPrintView({}: SupaPrintViewProps) {
  return (
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

        <Diplomas />

        <Skills />
      </PageSection>
    </Page>
  )
}
