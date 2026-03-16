import { getStrapiClient } from '@/data/strapi-client'
import { Config } from '@/types/strapi-types'

export const ServiceGetConfig = async (): Promise<Config> => {
  const strapiClient = await getStrapiClient()
  const config = strapiClient.single('config')
  const { data } = await config.find({
    populate: '*',
  })
  return data
}
