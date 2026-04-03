import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'
import Link from 'next/link'

type GoToCvProps = {
  className?: string
  children?: React.ReactNode
}

const GoToCvVariants = cva(
  'GoToCv bg-amber-500/50 p-4 font-bold rounded my-4',
  {
    variants: {},
    defaultVariants: {},
  },
)

export default function GoToCv({ className }: GoToCvProps) {
  return (
    <Link
      href="/skins"
      className={cn(GoToCvVariants({ className }))}
    >
      Aller au CV
    </Link>
  )
}
