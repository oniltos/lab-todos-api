import { Router } from "express";
import bcrypt from 'bcrypt'
import User from '../models/user.model.js'

const authRoutes = Router()

authRoutes.post('/signup', async (req, res) => {

    const { name, email, password, todos } = req.body

    try {

        const userEmail = await User.findOne({ email })

        if (userEmail) {
            throw new Error('Email already exists.');
        }

        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            name,
            email,
            password: passwordHash,
            todos

        });

        res.status(201).json({
            name: newUser.name,
            email: newUser.email,
        });

    } catch (error) {

        res.status(500).json({ message: 'Error while creating user!', error: error.message });
    }
});

export default authRoutes