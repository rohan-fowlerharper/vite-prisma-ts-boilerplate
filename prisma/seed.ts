import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const apple = await prisma.fruit.create({
    data: {
      name: 'Apple',
      color: 'Red',
    },
  })

  const tomato = await prisma.fruit.create({
    data: {
      name: 'Tomato',
      color: 'Red',
    },
  })

  console.log({ apple, tomato })
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
