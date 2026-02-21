'use server'

import { strapiClient } from '@/data/strapi-client'

export const ServiceGetIntro = async () => {
  const introSingleType = strapiClient.single('intro')
  const { data } = await introSingleType.find()
  return data
}
