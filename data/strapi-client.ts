import { strapi } from '@strapi/client'

let client: ReturnType<typeof strapi> | null = null

export function getStrapiClient() {
  if (client) return client

  const baseURL = process.env.STRAPI_API_BASE_URL
  const token = process.env.STRAPI_API_TOKEN

  if (!baseURL) {
    throw new Error('STRAPI_API_BASE_URL is not defined')
  }

  client = strapi({
    baseURL,
    auth: token,
  })

  return client
}
