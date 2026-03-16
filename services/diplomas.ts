import { getStrapiClient } from '@/data/strapi-client'
import { DiplomasSection } from '@/types/strapi-types'

export const ServiceGetDiplomasSection = async (): Promise<DiplomasSection> => {
  const strapiClient = await getStrapiClient()
  const diplomasSection = strapiClient.single('diplomas-section')
  const { data } = await diplomasSection.find({
    populate: {
      list: {
        populate: '*',
      },
    },
  })
  return data
}
