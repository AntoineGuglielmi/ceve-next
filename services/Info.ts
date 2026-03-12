'use server'

import { strapiClient } from '@/data/strapi-client'
import { Info } from '@/types/strapi-types'

export const ServiceGetInfo = async (): Promise<Info> => {
  const response = strapiClient.single('info')
  const { data } = await response.find({
    populate: {
      picture: {
        populate: '*',
      },
    },
  })
  return data
}
