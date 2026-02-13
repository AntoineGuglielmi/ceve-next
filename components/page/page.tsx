type PageProps = {
  className?: string
  children?: React.ReactNode
}

export default function Page({ children }: PageProps) {
  return (
    <div className="Page h-[29.7cm] w-[21cm] shadow-[0_0_0.5rem_0_rgba(0,0,0,0.15)] m-4 bg-cv-blanc grid grid-cols-[38.2%_61.8%] auto-rows-auto">
      {children}
    </div>
  )
}
