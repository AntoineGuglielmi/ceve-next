import { ServiceGetConfig } from '@/services/config'
import { notFound } from 'next/navigation'

export const checkCode = async (code: string) => {
  const config = await ServiceGetConfig()
  const { gen_cv_code } = config
  if (code !== gen_cv_code) {
    return notFound()
  }
}
