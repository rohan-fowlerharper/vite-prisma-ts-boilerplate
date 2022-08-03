import { PrismaClient, Prisma } from '@prisma/client'
const prisma = new PrismaClient()

const seedDataFruitsWithWombles: Prisma.FruitCreateInput[] = [
  {
    name: 'Apple',
    color: 'Red',
    wombles: {
      create: [
        {
          name: 'John',
          trait: 'Funny',
        },
        {
          name: 'Harper',
          trait: 'Kind',
        },
      ],
    },
  },
  {
    name: 'Eclair',
    color: 'White',
    wombles: {
      create: [
        {
          name: 'Charles',
          trait: 'Fast',
        },
      ],
    },
  },
]

async function main() {
  const createdWombles = await Promise.all(
    seedDataFruitsWithWombles.map(async (fruit) => {
      return await prisma.fruit.create({
        data: {
          name: fruit.name,
          color: fruit.color,
          wombles: fruit.wombles,
        },
      })
    })
  )

  console.log(createdWombles)
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
