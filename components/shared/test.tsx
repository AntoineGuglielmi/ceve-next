type TestProps = {
  className?: string
  children?: React.ReactNode
}

export default function Test({ className }: TestProps) {
  return <div className={`Test ${className ?? ''}`}></div>
}
