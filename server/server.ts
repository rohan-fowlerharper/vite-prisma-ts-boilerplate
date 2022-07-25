import express from 'express'
import fs from 'fs'
import path from 'path'
import fruitRouter from './routes/fruit.router'

const server = express()

server.use(express.static(path.resolve(__dirname, '../dist')))

server.use(express.urlencoded({ extended: false }))
server.get('/api', (req, res) => {
  console.log('hello')
  res.json({ message: 'Hello Word' })
})
server.use('/api/fruit', fruitRouter)
server.use('/api/*', (req, res) => {
  res.sendStatus(404)
})

server.get('*', (req, res) => {
  try {
    const html = fs.readFileSync(
      path.resolve(__dirname, '../dist/index.html'),
      'utf8'
    )
    return res.send(html)
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message)
      if (err.message.includes('no such file or directory')) {
        return res
          .status(404)
          .send('dist folder not found, try running `npm run build`')
      }
    }
    return res.status(500).send('something went wrong')
  }
})

export default server
