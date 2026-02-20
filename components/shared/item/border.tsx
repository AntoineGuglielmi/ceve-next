type BorderProps = {
  className?: string
  children?: React.ReactNode
}

export default function Border({ className, children }: BorderProps) {
  return (
    <div
      className={`Border absolute top-0 bottom-0 -left-2 w-px bg-cv-orange ${className ?? ''}`}
    />
  )
}
