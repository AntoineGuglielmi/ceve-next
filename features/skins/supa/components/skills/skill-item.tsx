import { cva } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'
import { Skill } from '@/types/strapi-types'
import List from '@/shared/components/lists/list'

type SkillItemProps = {
  className?: string
  level: 0 | 1 | 2
  children?: React.ReactNode
} & Skill

const SkillItemVariants = cva('SkillItem p-2 rounded', {
  variants: {
    level: {
      0: 'p-0',
      1: 'bg-[#F7F9FC]',
      2: 'bg-[#e1e9f4]',
      3: 'bg-[#8a9fbe]',
    },
  },
  defaultVariants: {
    level: 0,
  },
})

const SkillItemTitleVariants = cva('mb-1', {
  variants: {
    level: {
      0: 'font-bold fz-3',
      1: 'font-semibold',
      2: '',
    },
  },
  defaultVariants: {
    level: 0,
  },
})

export default function SkillItem({
  className,
  level,
  title,
  skills,
}: SkillItemProps) {
  if (!skills || skills.length === 0) {
    return (
      <span
        className={cn(
          SkillItemVariants({ level, className }),
          'px-1.5 py-0.5 fz-[9px]',
        )}
      >
        {title}
      </span>
    )
  }

  const isLeafLevel = skills.every(
    (skill) => !skill.skills || skill.skills.length === 0,
  )

  return (
    <div className={cn(SkillItemVariants({ level, className }))}>
      <p className={cn(SkillItemTitleVariants({ level }))}>{title}</p>

      <List
        items={skills!}
        renderItem={SkillItem}
        itemExtraProps={{ level: Math.min(level + 1, 2) as 0 | 1 | 2 }}
        getKey={(skill) => skill.id!}
        className={cn(
          'SkillsList flex gap-1',
          isLeafLevel ? 'flex-row flex-wrap' : 'flex-col',
        )}
      />
    </div>
  )
}
