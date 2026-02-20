type TitleProps = {
  className?: string
  children?: React.ReactNode
}

export default function Title({ className, children }: TitleProps) {
  return (
    <p
      className={`Title font-bold uppercase text-[13px] text-balance text-cv-orange ${className ?? ''}`}
    >
      {children}
    </p>
  )
}
