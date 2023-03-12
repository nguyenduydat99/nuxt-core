import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {}

main()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  .catch((e) => {
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
