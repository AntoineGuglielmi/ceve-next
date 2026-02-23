import { strapiClient } from '@/data/strapi-client'
import { ExperiencesSection } from '@/types/strapi-types'

export const ServiceGetExperiencesSection =
  async (): Promise<ExperiencesSection> => {
    const experiencesSection = strapiClient.single('experiences-section')
    const { data } = await experiencesSection.find({
      populate: {
        list: {
          populate: '*',
        },
      },
    })
    return data
  }
