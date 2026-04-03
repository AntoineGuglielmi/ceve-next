import GenerateCv from '@/components/generate-cv/generate-cv'
import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import { Suspense } from 'react'
import SkinIsLoading from './SkinIsLoading'
import { checkCode } from '@/shared/lib/checkCode'
import { ServiceGetConfig } from '@/services/config'

type CodePageProps = {
  params: Promise<{
    code: string
  }>
}

export default async function CodePage({ params }: CodePageProps) {
  const { code } = await params

  const isValid = await checkCode(code)

  if (!isValid) {
    notFound()
  }

  // const skin = process.env.PUBLIC_SKIN
  const { skin } = await ServiceGetConfig()
  if (!skin) {
    redirect('/')
  }

  const { code: skinCode } = skin!
  const SelectedSkin = await import(`./${skinCode}/PrintView`).then(
    (mod) => mod.default,
  )

  return (
    <>
      <Suspense fallback={<SkinIsLoading />}>
        <nav className="fixed top-4 left-4 flex flex-col gap-2 print:hidden">
          <GenerateCv
            code={code}
            className="bg-amber-500/50 p-4 font-bold rounded"
          >
            Générer le CV
          </GenerateCv>
          <Link
            className="bg-amber-500/50 p-4 font-bold rounded"
            href="/"
          >
            Accueil
          </Link>
        </nav>
        <main className="bg-white text-[11px] text-cv-anthracite flex items-center justify-center not-print:py-8">
          <SelectedSkin />
        </main>
      </Suspense>
    </>
  )
}
