import { strapiClient } from '@/data/strapi-client'
import { PlusSection } from '@/types/strapi-types'

export const ServiceGetPlusSection = async (): Promise<PlusSection> => {
  const plusSection = strapiClient.single('plus-section')
  const { data } = await plusSection.find()
  return data
}
