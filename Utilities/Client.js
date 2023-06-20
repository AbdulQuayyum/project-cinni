import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const token = process.env.NEXT_PUBLIC_SANITY_TOKEN

const config = {
    apiVersion: apiVersion,
    dataset: dataset,
    token: token,
    projectId: projectId,
    ignoreBrowserTokenWarning: true,
    useCdn: false,
}

export const Client = createClient(config)

const builder = imageUrlBuilder(Client)

export const UrlFor = (source) => builder.image(source)