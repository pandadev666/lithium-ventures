import mongoose from "mongoose";
import { UserSchema } from "./schema";

const User = mongoose.model("users", UserSchema);

export { User }
