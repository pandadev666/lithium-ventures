import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import mongoose from "mongoose"

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const mongo_uri = process.env.MONGO_URI;

if (mongo_uri) {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongo_uri)
        .then((_) => {
            app.listen(port, () => {
                console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
            });
        })
        .catch((err) => {
            console.log(err);
        })
    }
