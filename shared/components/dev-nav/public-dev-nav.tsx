import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'
import DevNav from './dev-nav'
import DevNavLink from './dev-nav-link'
import { FileUser } from 'lucide-react'

type PublicDevNavProps = {
  className?: string
  children?: React.ReactNode
}

const PublicDevNavVariants = cva('PublicDevNav max-w-240 mx-auto my-4', {
  variants: {},
  defaultVariants: {},
})

export default function PublicDevNav({ className }: PublicDevNavProps) {
  const { AUTO_REDIRECT } = process.env
  return (
    <DevNav className={cn(PublicDevNavVariants({ className }))}>
      <DevNavLink
        className="flex items-center gap-2"
        href={AUTO_REDIRECT!}
      >
        <FileUser size={16} /> Aller au CV
      </DevNavLink>
    </DevNav>
  )
}
