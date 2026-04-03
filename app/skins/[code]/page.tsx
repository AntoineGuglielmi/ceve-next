import { notFound, redirect } from 'next/navigation'
import { Suspense } from 'react'
import SkinIsLoading from './SkinIsLoading'
import { checkCode } from '@/shared/lib/checkCode'
import { ServiceGetConfig } from '@/services/config'
import PrintDevNav from '@/shared/components/dev-nav/print-dev-nav'

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
        <PrintDevNav code={code} />
        <main className="bg-white text-[11px] text-cv-anthracite flex items-center justify-center not-print:py-8">
          <SelectedSkin />
        </main>
      </Suspense>
    </>
  )
}
