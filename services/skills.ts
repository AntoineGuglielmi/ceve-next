'use server'

import { getStrapiClient } from '@/data/strapi-client'
import { HardSkillsSection, SoftSkillsSection } from '@/types/strapi-types'

export const ServiceGetHardSkillsSection =
  async (): Promise<HardSkillsSection> => {
    const strapiClient = await getStrapiClient()
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

export const ServiceGetSoftSkillsSection =
  async (): Promise<SoftSkillsSection> => {
    const strapiClient = await getStrapiClient()
    const softSkillsSection = strapiClient.single('soft-skills-section')
    const { data } = await softSkillsSection.find({
      populate: {
        list: {
          populate: '*',
        },
      },
    })
    return data
  }
