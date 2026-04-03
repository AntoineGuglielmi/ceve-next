import { redirect } from 'next/navigation'

type SkinPageProps = {
  params: Promise<void>
}

export default function SkinPage({}: SkinPageProps) {
  redirect(process.env.AUTO_REDIRECT!)
}
