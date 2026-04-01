import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'
import { ServiceGetFollowSection } from '@/services/follows'
import CvSection from './cv-section'
import List from '@/shared/components/lists/list'
import ItemWithIcon from './item-with-icon'
import Link from 'next/link'
import Border from './border'

type SocialsProps = {
  className?: string
}

const SocialsVariants = cva('Socials flex flex-col gap-3', {
  variants: {},
  defaultVariants: {},
})

export default async function Socials({ className }: SocialsProps) {
  const socials = await ServiceGetFollowSection()
  const { list } = socials
  return (
    <CvSection className={cn(SocialsVariants({ className }))}>
      {list?.map((social) => (
        <ItemWithIcon
          key={social.icon}
          iconName={social.icon! as keyof typeof import('lucide-react')}
          title={social.icon!}
          text={
            <Link
              href={social.link!}
              target="_blank"
            >
              {social.label}
            </Link>
          }
        />
      ))}
      <Border
        position="bottom"
        className="left-0"
      />
    </CvSection>
  )
}
