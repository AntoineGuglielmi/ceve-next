type PillProps = {
  className?: string
  children?: React.ReactNode
}

export default function Pill({ className, children }: PillProps) {
  return (
    <div
      className={`Pill bg-cv-pill py-1 px-2 rounded-full ${className ?? ''}`}
    >
      {children}
    </div>
  )
}
