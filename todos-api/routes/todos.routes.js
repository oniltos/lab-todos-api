import { Router } from 'express'
import ToDo from '../models/Todo.model.js'
import User from '../models/User.model.js'
import isAuthenticatedMiddleware from '../middlewares/isAuthenticatedMiddleware.js'

const toDosRouter = Router()

toDosRouter.get('/', isAuthenticatedMiddleware, async (req, res) => {
  try {
    const toDoList = await ToDo.find({user: req.user.id})
    return res.status(200).json(toDoList)
  } catch(error) {
    console.log(error)
    return res.status(500).json({message: 'Internal Server Error!'})
  } 
})

toDosRouter.post('/', isAuthenticatedMiddleware, async (req, res) => {

  // adiciona ao payload o ID do user que vem do req.user que vem do middleware
  const payload = { ...req.body, user: req.user.id }
  try {
    const newToDo = await ToDo.create(payload)

    // Atualizao o user dono do todo para incluir o ID do todo criado
    // Achar o user
    // Atualizar o user
    // Inserir o ID do novo todo
    await User.findOneAndUpdate({_id: req.user.id}, { $push: { todos: newToDo._id } })


    return res.status(201).json(newToDo)
  } catch (error) {
    console.log('Error during ToDo creation!', error)
    return res.status(500).json({message: 'Internal Server Error'})
  }
})

toDosRouter.get('/:id', isAuthenticatedMiddleware, async (req, res) => {
  try {
    const { id } = req.params
    const toDoId = await ToDo.findById(id)

    if (!toDoId) {
      return res.status(404).json({message: "ToDo not found!"})
    }
    return res.status(200).json(toDoId)
  } catch (error) {
    console.log(error)
    return res.status(500).json({message: 'Internal Server Error!'})
  }
})

toDosRouter.put('/:id', isAuthenticatedMiddleware, async (req, res) => {
  try {
      const payload = req.body
      const { id } = req.params

      const updatedToDo = await ToDo.findOneAndUpdate({_id: id, user: req.user.id}, payload, { new: true })
      return res.status(200).json(updatedToDo)
  } catch (error) {
      console.log(error)
      return res.status(500).json({message: 'Internal Server Error'})
  }
})

toDosRouter.delete('/:id', isAuthenticatedMiddleware, async (req, res) => {
  const { id } = req.params
  try {
    await ToDo.findOneAndDelete({_id: id, user: req.user.id})
    res.status(204).json()
  } catch (error) {
    console.log(error)
    return res.status(500).json({message: 'Internal Server Error'})
  }
})

export default toDosRouter