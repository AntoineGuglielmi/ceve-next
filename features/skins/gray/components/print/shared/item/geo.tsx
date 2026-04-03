type GeoProps = {
  className?: string
  children?: React.ReactNode
}

export default function Geo({ className, children }: GeoProps) {
  return <p className={`Geo ${className ?? ''}`}>{children}</p>
}
