import { getStrapiClient } from '@/data/strapi-client'
import { HighlightedProject } from '@/types/strapi-types'

export const ServiceGetHighlightedProjects =
  async (): Promise<HighlightedProject> => {
    const strapiClient = await getStrapiClient()
    const highlightedProjects = strapiClient.single('highlighted-project')
    const { data } = await highlightedProjects.find({
      populate: {
        list: {
          populate: '*',
        },
      },
    })
    return data
  }
