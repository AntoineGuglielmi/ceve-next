import { ServiceGetConfig } from '@/services/config'

export const checkCode = async (code: string): Promise<boolean> => {
  const config = await ServiceGetConfig()
  const { gen_cv_code } = config
  return code === gen_cv_code
}
