import { PrismaClient } from '@prisma/client'
import type { Fruit } from '@prisma/client'
const prisma = new PrismaClient()

const wombles = [
  {
    name: 'Harper',
    trait: 'Kind',
    fruit: {
      name: 'Apple',
      color: 'Red',
    },
  },
  {
    name: 'Charles',
    trait: 'Fast',
    fruit: {
      name: 'Eclair',
      color: 'White',
    },
  },
  {
    name: 'John',
    trait: 'Funny',
    fruit: {
      name: 'Apple',
      color: 'Red',
    },
  },
]

const fruits = [
  {
    name: 'Apple',
    color: 'Red',
    wombles: [
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
  {
    name: 'Eclair',
    color: 'White',
    wombles: [
      {
        name: 'Charles',
        trait: 'Fast',
      },
    ],
  },
]

async function main() {
  const createdWombles = await Promise.all(
    fruits.map(async (fruit) => {
      return await prisma.fruit.create({
        data: {
          name: fruit.name,
          color: fruit.color,
          wombles: {
            create: [...fruit.wombles],
          },
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
