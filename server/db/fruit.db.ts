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
