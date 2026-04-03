type ColumnProps = {
  className?: string
  children?: React.ReactNode
}

export default function Column({ className, children }: ColumnProps) {
  return (
    <div className={`Column grid auto-rows-min grid-cols-1 ${className ?? ''}`}>
      {children}
    </div>
  )
}
