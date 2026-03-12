import { ServiceGetInfo } from '@/services/Info'
import Avatar from './avatar'
import Infos from './infos'
import { ServiceGetIntro } from '@/services/Intro'
import Intro from './intro'
import SectionGroup from '@/shared/components/section-group'

type HeaderProps = {
  className?: string
  children?: React.ReactNode
}

export default async function Header({ className, children }: HeaderProps) {
  const { email, firstname, lastname, picture, website, city, postalCode } =
    await ServiceGetInfo()
  const { text, title } = await ServiceGetIntro()

  return (
    <header
      className={`Header flex flex-col @min-[550px]/main:flex-row ${className ?? ''}`}
    >
      <Avatar
        picture={picture}
        className="h-60 w-full @min-[550px]/main:h-auto @min-[550px]/main:flex-[0.382]"
      />
      <SectionGroup className="@min-[550px]/main:flex-[0.618]">
        <Infos {...{ firstname, lastname, website, email, city, postalCode }} />
        <Intro {...{ text, title }} />
      </SectionGroup>
    </header>
  )
}
