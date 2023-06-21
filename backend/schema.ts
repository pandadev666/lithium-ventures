import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    email: String,
    name: String,
    password: String,
})

export {
    UserSchema
}
