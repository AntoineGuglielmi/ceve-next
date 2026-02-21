'use server'

import { strapiClient } from '@/data/strapi-client'
import { Intro } from '@/types/strapi-types'

export const ServiceGetIntro = async (): Promise<Intro> => {
  const introSingleType = strapiClient.single('intro')
  const { data } = await introSingleType.find()
  return data
}
