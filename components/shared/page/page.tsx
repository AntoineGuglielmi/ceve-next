type PageProps = {
  className?: string
  id?: string
  children?: React.ReactNode
}

export default function Page({ children, id }: PageProps) {
  return (
    <div
      id={id}
      className="Page h-[29.7cm] w-[21cm] shadow-[0_0_0.5rem_0_rgba(0,0,0,0.15)] bg-cv-blanc grid grid-cols-phi"
    >
      {children}
    </div>
  )
}
