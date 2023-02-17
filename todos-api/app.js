import express from 'express'
import cors from 'cors'
import connectDB from './config/db.connection.js'
import toDosRouter from './routes/todos.routes.js'
import authRouter from './routes/auth.routes.js'

const PORT = 3001
const app = express()
connectDB()

app.use(cors())
app.use(express.json())
app.use('/todos', toDosRouter)
app.use(authRouter)

app.get('/', (req, res) => {
  res.send('ToDo-API working properly!')
})



app.listen(PORT, () => console.log('Server listening on port ', PORT))