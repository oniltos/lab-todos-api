import mongoose from 'mongoose'
import validator from 'validator'

const { Schema, model } = mongoose

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      validate: {
        validator: (value) => validator.isEmail(value),
          message: "email is mandatory"
      }
    },
    passwordHash: {
      type: String,
      required: true
    },
    todos: [{
      type: Schema.Types.ObjectId,
      ref: "Todo"
    }]
}, { timestamps: true })

export default model ('User', userSchema)