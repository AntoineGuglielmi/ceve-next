type SectionTitleProps = {
  className?: string
  children?: React.ReactNode
  highlighted?: boolean
}

export default function SectionTitle({
  className,
  children,
  highlighted = false,
}: SectionTitleProps) {
  return (
    <h2
      className={`
        SectionTitle text-[15px] uppercase font-black relative
        after:block after:h-px after:w-full after:my-2 after:bg-cv-orange 
        before:block before:h-1 before:bg-cv-orange before:w-10.5 before:absolute before:top-full before:-translate-y-1/2
        ${highlighted && 'text-cv-orange'} ${className ?? ''}
    `}
    >
      {children}
    </h2>
  )
}
