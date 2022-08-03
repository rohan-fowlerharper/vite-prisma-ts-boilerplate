import express from 'express'
// import prisma directly if you wanna make queries directly
import prisma from '../prisma'
import * as db from '../db/fruit.db'

const router = express.Router()

router.get('/', async (req, res) => {
  const fruit = await db.getWomblesWithFruit()

  res.json(fruit)
})

export default router
