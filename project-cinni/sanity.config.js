import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './Schemas/Index'

export default defineConfig({
  name: 'default',
  title: 'project-cinni',

  projectId: 'zxq9p2li',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
