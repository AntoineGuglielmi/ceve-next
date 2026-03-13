import Markdown from '@/shared/components/markdown'
import { MoleculesJobItem } from '@/types/strapi-types'
import ReactMarkdown from 'react-markdown'

type JobItemProps = {
  className?: string
  children?: React.ReactNode
} & MoleculesJobItem

export default function JobItem({
  className,
  children,
  text,
  title,
  description,
  technos,
}: JobItemProps) {
  return (
    <div
      className={`JobItem bg-cv-gris-clair/25 rounded-lg p-4 ${className ?? ''}`}
    >
      <p className="font-bold border-b pb-2 mb-2">{title}</p>
      <Markdown content={description!} />
    </div>
  )
}
