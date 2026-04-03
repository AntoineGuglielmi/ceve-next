type PillProps = {
  className?: string
  children?: React.ReactNode
  text?: string
}

export default function Pill({ className, text }: PillProps) {
  return (
    <div
      className={`Pill bg-cv-pill py-1 px-2 rounded-full ${className ?? ''}`}
    >
      {text}
    </div>
  )
}
