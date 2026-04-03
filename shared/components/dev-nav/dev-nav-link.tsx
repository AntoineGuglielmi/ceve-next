import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'
import Link, { LinkProps } from 'next/link'

type DevNavLinkProps = {
  className?: string
  children?: React.ReactNode
} & LinkProps

const DevNavLinkVariants = cva('DevNavLink hover:text-slate-400 transition', {
  variants: {},
  defaultVariants: {},
})

export default function DevNavLink({
  className,
  children,
  ...linkProps
}: DevNavLinkProps) {
  return (
    <Link
      {...linkProps}
      className={cn(DevNavLinkVariants({ className }))}
    >
      {children}
    </Link>
  )
}
