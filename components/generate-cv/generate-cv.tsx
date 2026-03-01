'use client'

type GenerateCvProps = {
  className?: string
  children?: React.ReactNode
  code?: string
  cvDate?: string
}

export default function GenerateCv({
  className,
  children,
  code,
  cvDate,
}: GenerateCvProps) {
  const onClick = async () => {
    const res = await fetch('http://localhost:3000/api/generate-cv', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code }),
    })

    const blob = await res.blob()
    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = `cv-antoine-guglielmi-${cvDate}.pdf`
    document.body.appendChild(a)
    a.click()
    a.remove()

    URL.revokeObjectURL(url)
  }

  return (
    <button
      onClick={onClick}
      className={`GenerateCv ${className ?? ''}`}
    >
      {children}
    </button>
  )
}
