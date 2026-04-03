import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'
import Page from '@/features/skins/supa/components/page'

type SkinIsLoadingProps = {
  className?: string
  variant?: 'default' | 'other'
  children?: React.ReactNode
}

const SkinIsLoadingVariants = cva('SkinIsLoading', {
  variants: {
    variant: {
      default: '',
      other: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export default function SkinIsLoading({
  className,
  variant,
}: SkinIsLoadingProps) {
  return (
    <main className="bg-white flex items-center justify-center pt-4">
      <Page className={cn(SkinIsLoadingVariants({ variant, className }))}>
        <p className="p-4">CV is loading...</p>
      </Page>
    </main>
  )
}
