import { redirect } from 'next/navigation'

type SkinPageProps = {
  params: Promise<void>
}

export default function SkinPage({}: SkinPageProps) {
  return redirect(process.env.AUTO_REDIRECT!)
}
