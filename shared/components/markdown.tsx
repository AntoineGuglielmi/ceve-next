import ReactMarkdown from 'react-markdown'

type MarkdownProps = {
  className?: string
  content: string
  children?: React.ReactNode
}

export default function Markdown({ className, content }: MarkdownProps) {
  return (
    <div className={`Markdown ${className ?? ''}`}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}
