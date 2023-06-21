import { Request, Response } from "express";
import { User } from "./model";
import { IUser } from "./types";

const findUser = async (email: string): Promise< IUser | null> => {
    return await User.findOne({email});
}

const SignIn = async (req: Request, res: Response) => {
    const user = await findUser(req.body.email);
    if (!user) {
        res.status(400);
        res.send({message: 'User does not exist'});
    }
    else if(user?.password != req.body.password) {
        res.status(400);
        res.send({message: 'Password is not correct'});
    }
    else {
        res.send({user})
    }
}

const SignUp = async (req: Request, res: Response) => {
    const isExist = await findUser(req.body.email);
    if (isExist) {
        res.status(403);
        res.send({message: 'User already exists'})
    }
    else {
        const newUser = new User({
            email: req.body.email,
            name: req.body.name,
            password: req.body.password,
        })
        try {
            await newUser.save();
            res.send({})
        } catch (err) {
            throw err;
        }
    }
}

export default {
    SignIn,
    SignUp,
}
