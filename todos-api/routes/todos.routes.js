import { Router } from "express"
import Todo from '../models/todo.model.js'

const todoRoutes = Router()

todoRoutes.get("/", async (req, res) => {
    try {

        const todos = await Todo.find({})
        return res.status(200).json(todos)

    } catch (error) {

        console.log(error)
        return res.status(500).json({ message: "Internal Server Error" })
    }
})

todoRoutes.get("/:id", async (req, res) => {
    try {

        const { id } = req.params
        const todo = await Todo.findById(id)

        if (!todo) {
            return res.status(404).json({ message: "Todo Not Found!" })
        }

        return res.status(200).json(todo)

    } catch (error) {

        console.log(error)
        return res.status(500).json({ message: "Internal Server Error" })
    }
})

todoRoutes.post("/", async (req, res) => {
    try {

        const newTodo = await Todo.create(req.body)
        return res.status(201).json(newTodo)

    } catch (error) {

        console.log('Erro to create Todo!', error)
        return res.status(500).json({ message: "Internal Server Error" })
    }
})

todoRoutes.put("/:id", async (req, res) => {
    try {

        const payload = req.body
        const { id } = req.params

        const updatedTodo = await Todo.findOneAndUpdate({ _id: id }, payload, { new: true })
        return res.status(200).json(updatedTodo)
    } catch (error) {

        console.log(error)
        return res.status(500).json({ message: "Internal Server Error" })
    }
})

todoRoutes.delete("/:id", async (req, res) => {
    try {

        const { id } = req.params

        await Todo.findOneAndDelete({_id: id})

        res.status(204).json()

    } catch (error) {
        
        console.log(error)
        return res.status(500).json({ message: "Internal Server Error" })
    }
})

export default todoRoutes