import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'
import A4 from '@/shared/components/page/a4'

type SkinIsLoadingProps = {
  className?: string
  children?: React.ReactNode
}

const SkinIsLoadingVariants = cva('SkinIsLoading flex justify-center', {
  variants: {},
  defaultVariants: {},
})

export default function SkinIsLoading({ className }: SkinIsLoadingProps) {
  return (
    <main className="bg-white flex items-center justify-center pt-4">
      <A4 className={cn(SkinIsLoadingVariants({ className }))}>
        <p className="mt-20">Chargement...</p>
      </A4>
    </main>
  )
}
