import { Router } from 'express'
import User from '../models/User.model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

const authRouter = Router()

authRouter.post('/auth/sign-up', async (req, res) => {
  const { name, email, password} = req.body

  try {
    const userExists = await User.findOne({email})
    if (userExists) {
      throw new Error('User already exists')
    }

    const salt = bcrypt.genSaltSync(+process.env.SALT_ROUNDS)
    const passwordHash = bcrypt.hashSync(password, salt)


    const newUser = await User.create({ name, email, passwordHash })
    if (newUser) {
      return res.status(201).json({message: 'User created'}) 

    }
  } catch (error) {
    console.log(error)
    if (error.message === 'User already exists') {
      return res.status(409).json({message: 'Check added data'})
    }
    return res.status(500).json({message: 'Internal Server Error'})
  }
})

authRouter.post('/auth/login', async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({email})
    if (!user) {
      throw new Error('User does not exist')
    }

    if (!bcrypt.compareSync(password, user.passwordHash)) {
      return res.status(401).json({message: "Invalid Password"})
    }

    const expiresIn = process.env.JWD_EXPIRES
    const secret = process.env.JWT_SECRET
    const token = jwt.sign({ id: user._id, email: user.email }, secret, {expiresIn})
    return res.status(200).json({ user: { name: user.name }, logged: true, jwt: token})
  } catch (error) {
    console.log(error)
    return res.status(401).json({message: "Login or Password incorrect."})
  }
})

export default authRouter