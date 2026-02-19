type DateProps = {
  className?: string
  children?: React.ReactNode
  start: string
  end: string
}

export default function Date({ className, start, end }: DateProps) {
  return (
    <p className={`Date ${className ?? ''}`}>
      {start} - {end}
    </p>
  )
}
