'use server'

import { strapiClient } from '@/data/strapi-client'
import { Info } from '@/types/strapi-types'

export const ServiceGetInfo = async (): Promise<Info> => {
  const response = await strapiClient.single('info')
  const { data } = await response.find()
  return data
}
