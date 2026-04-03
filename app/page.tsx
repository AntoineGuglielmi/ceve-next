import GoToCv from '@/features/skins/go-to-cv'

type MorePageProps = {
  params: Promise<void>
}

export const dynamic = 'force-dynamic'

export default async function MorePage({}: MorePageProps) {
  const skin = process.env.PUBLIC_SKIN || 'skin1'

  const SelectedSkin = await import(`./skins/[code]/${skin}/PublicView`).then(
    (mod) => mod.default,
  )
  return (
    <main className="flex @container/main flex-col text-cv-anthracite w-full max-w-240 mx-auto shadow-[0_0_0.5rem_0_rgba(0,0,0,0.15)] bg-cv-blanc ">
      {process.env.NODE_ENV === 'development' && <GoToCv />}
      <SelectedSkin />
    </main>
  )
}
