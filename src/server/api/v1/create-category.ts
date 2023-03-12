import { H3Event } from 'h3'

import { createNewCategory } from '@/services/controllers/createNewCategory'

export default defineEventHandler((event: H3Event) => {
  return createNewCategory(event)
})
