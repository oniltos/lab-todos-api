import dotenv from 'dotenv/config'
import cors from 'cors'
import express from "express";
import connectDB from "./config/db.connection.js";
import todosRoutes from './routes/todos.routes.js';
import usersRoutes from './routes/users.routes.js'
import welcomeRoutes from './routes/welcome.routes.js'
import authRoutes from './routes/auth.routes.js'

connectDB()

const app = express()
app.use(express.json())
app.use(cors())


app.use(welcomeRoutes)
app.use('/auth', authRoutes)
app.use('/todos', todosRoutes)
app.use('/users', usersRoutes)

app.listen(process.env.PORT, () => console.log("Server listening on port:", process.env.PORT))