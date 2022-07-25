import express from 'express'
import prisma from '../prisma'

const router = express.Router()

import * as db from '../db/fruit.db'

router.get('/', async (req, res) => {
  const fruit = await db.getFruitThatEndWithO()

  res.json(fruit)
})

export default router
