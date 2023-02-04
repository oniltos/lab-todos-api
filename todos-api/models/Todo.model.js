import mongoose from 'mongoose'

const { Schema, model } = mongoose

const toDoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true })

export default model ('ToDo', toDoSchema)