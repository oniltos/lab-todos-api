import mongoose from "mongoose";

const {Schema, model} = mongoose

const todoSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

export default model('Todo', todoSchema)