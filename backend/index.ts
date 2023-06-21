import express, { Express } from 'express';
import dotenv from 'dotenv';
import mongoose from "mongoose"
import cors from "cors";
import AuthController from "./controller";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const mongo_uri = process.env.MONGO_URI;

if (mongo_uri) {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongo_uri)
        .then((res) => {
            app.use((cors({
                origin: process.env.FRONTEND_ORIGIN
            })));
            app.use(express.json())
            app.post('/auth/signup', AuthController.SignUp);
            app.listen(port, () => {
                console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
            });
        })
        .catch((err) => {
            console.log(err);
        })
    }
