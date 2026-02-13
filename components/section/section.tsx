type SectionProps = {
  className?: string
  children?: React.ReactNode
  hasPadding?: boolean
}

export default function Section({
  className,
  children,
  hasPadding = true,
}: SectionProps) {
  return (
    <section className={`${className ?? 'Section'} ${hasPadding && 'p-4'}`}>
      {children}
    </section>
  )
}
