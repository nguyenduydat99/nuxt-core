import { H3Event } from 'h3'

import prisma from '@/services/prisma/client'

const createNewCategory = async (event: H3Event) => {
  const body = await readBody(event)

  return await prisma.category
    .create({
      data: {
        name: body.name,
      },
    })
    .then(() => {
      return {
        statusCode: 200,
        msg: 'success',
        data: [],
      }
    })
    .catch(() => {
      throw createError({
        statusMessage: "Can't created category",
      })
    })
}
export { createNewCategory }
