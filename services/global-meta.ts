import { strapiClient } from '@/data/strapi-client'
import { GlobalMeta } from '@/types/strapi-types'

export const ServiceGetGlobalMeta = async (): Promise<GlobalMeta> => {
  const globalMeta = strapiClient.single('global-meta')
  const { data } = await globalMeta.find()
  return data
}
