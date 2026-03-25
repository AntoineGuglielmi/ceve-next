import { cn } from '@/shared/lib/utils'
import SectionTitleFromCv from '@/components/section/section-title'
import { SectionTitleProps as SectionTitlePropsFromCv } from '@/components/section/section-title'

type SectionTitleProps = {
  className?: string
  children?: React.ReactNode
} & Omit<SectionTitlePropsFromCv, 'className' | 'children'>

export default function SectionTitle({
  className,
  children,
  decorationColor,
  highlighted,
}: SectionTitleProps) {
  return (
    <SectionTitleFromCv
      {...{ decorationColor, highlighted }}
      className={cn('SectionTitle text-[24px]', className)}
    >
      {children}
    </SectionTitleFromCv>
  )
}
