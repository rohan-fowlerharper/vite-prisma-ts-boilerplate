import prisma from '../prisma'

export function getFruitThatEndWithO() {
  return prisma.fruit.findFirst({
    where: {
      name: {
        endsWith: 'o',
      },
    },
  })
}

export function getWomblesWithFruit() {
  return prisma.fruit.findMany({
    include: {
      wombles: true,
    },
  })
}
