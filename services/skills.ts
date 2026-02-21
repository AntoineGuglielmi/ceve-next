'use server'

import { strapiClient } from '@/data/strapi-client'
import { HardSkillsSection } from '@/types/strapi-types'

export const ServiceGetHardSkillsSection =
  async (): Promise<HardSkillsSection> => {
    const hardSkillsSection = strapiClient.single('hard-skills-section')
    const { data } = await hardSkillsSection.find({
      populate: {
        list: {
          populate: '*',
        },
      },
    })
    return data
  }
