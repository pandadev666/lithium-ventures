import { Request, Response } from "express";
import { UserModel } from "./model";
import { IUser } from "./types";

const findUser = async (email: string): Promise< IUser | null> => {
    return await UserModel.findOne({email});
}

const SignIn = async (req: Request, res: Response) => {
    const user = await findUser(req.body.email);
    if (!user) {
        res.send({
            status: "fail",
            error: "User does not exist",
        })
    }
    else if(user?.password != req.body.password) {
        res.send({
            status: "fail",
            error: "Password does not match",
        })
    }
    else {
        res.send({
            status: "success",
            user,
        })
    }
}

const SignUp = async (req: Request, res: Response) => {
    const isExist = await findUser(req.body.email);
    if (isExist) {
        res.send({
            status: "fail",
            error: "User Already Exist",
        })
    }
    else {
        const newUser = new UserModel({
            email: req.body.email,
            name: req.body.name,
            password: req.body.password,
        })
        try {
            await newUser.save();
            res.send({ status: "success" });
        } catch (e) {
            res.send({ status: "fail", error: e});
        }
    }
}

export default {
    SignIn,
    SignUp,
}
