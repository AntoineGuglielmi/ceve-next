type OrganismProps = {
  className?: string
  children?: React.ReactNode
}

export default function Organism({ className, children }: OrganismProps) {
  return (
    <div className={`Organism font-bold ${className ?? ''}`}>{children}</div>
  )
}
