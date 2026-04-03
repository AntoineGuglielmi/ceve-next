import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'
import AdminLink from '@/shared/components/admin-link'

type GoToCvProps = {
  className?: string
  children?: React.ReactNode
}

const GoToCvVariants = cva('GoToCv my-4', {
  variants: {},
  defaultVariants: {},
})

export default function GoToCv({ className }: GoToCvProps) {
  const { AUTO_REDIRECT } = process.env
  return (
    <AdminLink
      href={AUTO_REDIRECT!}
      className={cn(GoToCvVariants({ className }))}
    >
      Aller au CV
    </AdminLink>
  )
}
