import { Request, Response } from 'express'
import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (request: Request, response: Response) => {
  response.send('Hello World')
})

app.listen(3333)