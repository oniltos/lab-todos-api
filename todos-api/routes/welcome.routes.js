import { Router } from "express";

const welcomeRoutes = Router()

welcomeRoutes.get('/', (req, res) => {
    res.send("Welcome to the Todo List API")
})

export default welcomeRoutes