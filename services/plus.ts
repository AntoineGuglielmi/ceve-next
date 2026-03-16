import { getStrapiClient } from '@/data/strapi-client'
import { PlusSection } from '@/types/strapi-types'

export const ServiceGetPlusSection = async (): Promise<PlusSection> => {
  const strapiClient = await getStrapiClient()
  const plusSection = strapiClient.single('plus-section')
  const { data } = await plusSection.find()
  return data
}
