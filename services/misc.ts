import { strapiClient } from '@/data/strapi-client'
import { MiscSection } from '@/types/strapi-types'

export const ServiceGetMiscSection = async (): Promise<MiscSection> => {
  const miscSection = strapiClient.single('misc-section')
  const { data } = await miscSection.find({
    populate: {
      list: {
        populate: '*',
      },
    },
  })
  return data
}
