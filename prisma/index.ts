import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const fruit = await prisma.fruit.create({
    data: {
      name: 'Apple',
      color: 'Red',
    },
  })
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
