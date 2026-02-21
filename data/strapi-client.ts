import { strapi } from '@strapi/client'

const { STRAPI_API_TOKEN } = process.env

export const strapiClient = strapi({
  baseURL: 'http://localhost:1337/api',
  auth: STRAPI_API_TOKEN,
})
