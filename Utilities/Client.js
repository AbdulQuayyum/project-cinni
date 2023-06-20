import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const Client = createClient({
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    ignoreBrowserTokenWarning: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn: true,
})

const builder = imageUrlBuilder(Client)

export const UrlFor = (source) => builder.image(source)