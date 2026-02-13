type SectionTitleProps = {
  className?: string
  children?: React.ReactNode
  highlighted?: boolean
  decorationColor?: 'orange' | 'white' | 'black' | 'current'
}

export default function SectionTitle({
  className,
  children,
  highlighted = false,
  decorationColor = 'current',
}: SectionTitleProps) {
  const decorationColorClass = { before: '', after: '' }
  switch (decorationColor) {
    case 'orange':
      decorationColorClass.before = 'before:bg-cv-orange'
      decorationColorClass.after = 'after:bg-cv-orange'
      break
    case 'white':
      decorationColorClass.before = 'before:bg-cv-blanc'
      decorationColorClass.after = 'after:bg-cv-blanc'
      break
    case 'black':
      decorationColorClass.before = 'before:bg-cv-anthracite'
      decorationColorClass.after = 'after:bg-cv-anthracite'
      break
    default:
      decorationColorClass.before = 'before:bg-current'
      decorationColorClass.after = 'after:bg-current'
  }
  return (
    <h2
      className={`
        SectionTitle text-[15px] uppercase font-black relative
        after:block after:h-px after:w-full after:mt-2 after:mb-3 ${decorationColorClass.after} 
        before:block before:h-0.75 before:w-6 before:absolute before:top-full before:-translate-y-1/2 ${decorationColorClass.before}
        ${highlighted && 'text-cv-orange'} ${className ?? ''}
    `}
    >
      {children}
    </h2>
  )
}
