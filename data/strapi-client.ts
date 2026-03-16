import { strapi } from '@strapi/client'

const { STRAPI_API_TOKEN, STRAPI_API_BASE_URL } = process.env

export const strapiClient = strapi({
  baseURL: STRAPI_API_BASE_URL!,
  auth: STRAPI_API_TOKEN,
})
