import { MoleculesJobItem } from '@/types/strapi-types'

type JobItemProps = {
  className?: string
  children?: React.ReactNode
} & MoleculesJobItem

export default function JobItem({
  className,
  children,
  text,
  title,
}: JobItemProps) {
  return (
    <div
      className={`JobItem bg-cv-gris-clair/25 rounded-lg p-4 ${className ?? ''}`}
    >
      <p>{title}</p>
      {children}
    </div>
  )
}
