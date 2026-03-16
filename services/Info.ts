'use server'

import { getStrapiClient } from '@/data/strapi-client'
import { Info } from '@/types/strapi-types'

export const ServiceGetInfo = async (): Promise<Info> => {
  const strapiClient = await getStrapiClient()
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
