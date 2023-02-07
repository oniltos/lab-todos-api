import mongoose from "mongoose";

const connectDB = async () => {
    const connection = await mongoose.connect(process.env.MONGODB_URI)
}

export default connectDB