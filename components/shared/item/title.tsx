type TitleProps = {
  className?: string
  children?: React.ReactNode
}

export default function Title({ className, children }: TitleProps) {
  return (
    <p
      className={`Title font-bold pr-2 uppercase text-[13px] ${className ?? ''}`}
    >
      {children}
    </p>
  )
}
