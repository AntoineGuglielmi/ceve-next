import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'
import Link, { LinkProps } from 'next/link'

type AdminLinkProps = {
  className?: string
  children?: React.ReactNode
} & LinkProps

const AdminLinkVariants = cva(
  'AdminLink bg-amber-500/50 p-4 font-bold rounded',
  {
    variants: {},
    defaultVariants: {},
  },
)

export default function AdminLink({
  className,
  children,
  ...aProps
}: AdminLinkProps) {
  return (
    <Link
      {...aProps}
      className={cn(AdminLinkVariants({ className }))}
    >
      {children}
    </Link>
  )
}
