type ColumnProps = {
  className?: string
  children?: React.ReactNode
}

export default function Column({ className, children }: ColumnProps) {
  return <div className={`Column ${className ?? ''}`}>{children}</div>
}
