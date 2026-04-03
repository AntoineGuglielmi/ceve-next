import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'
import DevNav from './dev-nav'
import GenerateCv from './generate-cv'
import DevNavLink from './dev-nav-link'
import { Download, Home } from 'lucide-react'

type PrintDevNavProps = {
  className?: string
  children?: React.ReactNode
  code?: string
}

const PrintDevNavVariants = cva(
  'PrintDevNav fixed top-4 left-4 flex-col items-start print:hidden',
  {
    variants: {},
    defaultVariants: {},
  },
)

export default function PrintDevNav({ className, code }: PrintDevNavProps) {
  return (
    <DevNav className={cn(PrintDevNavVariants({ className }))}>
      <GenerateCv
        className="flex items-center gap-2"
        code={code}
      >
        <Download size={16} /> Générer le CV
      </GenerateCv>
      <DevNavLink
        href="/"
        className="flex items-center gap-2"
      >
        <Home size={16} /> Accueil
      </DevNavLink>
    </DevNav>
  )
}
