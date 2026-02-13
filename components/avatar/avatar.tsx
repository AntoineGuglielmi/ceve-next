import Image from 'next/image'
import Section from '../section/section'

type AvatarProps = {
  className?: string
  children?: React.ReactNode
}

export default function Avatar({ className, children }: AvatarProps) {
  return (
    <Section
      hasPadding={false}
      className={`Avatar flex items-center justify-center relative ${className ?? ''}`}
    >
      <Image
        src="/images/antoine.jpg"
        alt="Antoine"
        height={500}
        width={500}
        className="absolute opacity-5"
      />
    </Section>
  )
}
