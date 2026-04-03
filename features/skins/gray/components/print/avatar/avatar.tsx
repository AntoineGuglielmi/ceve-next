import Image from 'next/image'
import Section from '../section/section'

type AvatarProps = {
  className?: string
  children?: React.ReactNode
}

export default function Avatar({ className }: AvatarProps) {
  return (
    <Section
      hasPadding={false}
      className={`Avatar flex items-center justify-center relative overflow-hidden h-[5cm] ${className ?? ''}`}
    >
      <Image
        src="/images/antoine.jpg"
        alt="Antoine"
        height={500}
        width={500}
        className="absolute translate-y-1"
      />
    </Section>
  )
}
