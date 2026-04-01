import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'
import CvSection from './cv-section'
import { ServiceGetMiscSection } from '@/services/misc'
import ItemWithIcon from './item-with-icon'

type MiscProps = {
  className?: string
  children?: React.ReactNode
}

const MiscVariants = cva('Misc', {
  variants: {},
  defaultVariants: {},
})

export default async function Misc({ className, children }: MiscProps) {
  const misc = await ServiceGetMiscSection()
  const { list } = misc
  console.log({
    misc,
  })
  return (
    <CvSection className={cn(MiscVariants({ className }))}>
      {list!.map(({ id, text }) => (
        <ItemWithIcon
          key={id}
          text={text}
        />
      ))}
    </CvSection>
  )
}
