import { getStrapiClient } from '@/data/strapi-client'
import { FollowSection } from '@/types/strapi-types'

export const ServiceGetFollowSection = async (): Promise<FollowSection> => {
  const strapiClient = await getStrapiClient()
  const followSection = strapiClient.single('follow-section')
  const { data } = await followSection.find({
    populate: {
      list: {
        populate: '*',
      },
    },
  })
  return data
}
