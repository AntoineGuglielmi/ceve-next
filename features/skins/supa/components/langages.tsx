import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'
import { FR, GB } from 'country-flag-icons/react/1x1'
import { ServiceGetHardSkillsSection } from '@/services/skills'
import CvSection from './cv-section/cv-section'

type LangagesProps = {
  className?: string
  children?: React.ReactNode
}

const LangagesVariants = cva('Langages flex flex-col gap-3', {
  variants: {},
  defaultVariants: {},
})

export default async function Langages({ className }: LangagesProps) {
  const { list: skills } = await ServiceGetHardSkillsSection()
  const langages = skills!.filter(
    (skill) => skill.skill_category?.label === 'Langue',
  )

  const flagIcons: Record<string, React.ComponentType> = {
    FR,
    GB,
  }

  return (
    <CvSection className={cn(LangagesVariants({ className }))}>
      {langages.map(({ text, id, icon }) => {
        const Icon = flagIcons[icon!]
        return (
          <div
            key={id}
            className="flex gap-2 items-center"
          >
            {Icon && (
              <div className="size-8 rounded-full overflow-hidden">
                <Icon />
              </div>
            )}
            <p>{text}</p>
          </div>
        )
      })}
    </CvSection>
  )
}
