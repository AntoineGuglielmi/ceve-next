type ContainerProps = {
  className?: string
  children?: React.ReactNode
}

export default function Container({ className, children }: ContainerProps) {
  return (
    <div className={`Container w-full px-4 ${className ?? ''}`}>{children}</div>
  )
}
