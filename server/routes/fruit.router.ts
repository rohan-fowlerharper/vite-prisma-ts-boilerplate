import express from 'express'
import prisma from '../prisma'

const router = express.Router()

router.get('/', async (req, res) => {
  const fruit = await prisma.fruit.findMany()

  res.json(fruit)
})

export default router
