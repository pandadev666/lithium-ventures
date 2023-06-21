import { Request, Response } from "express";
import { UserModel } from "./model";

const SignUp = async (req: Request, res: Response) => {
    const exists = await UserModel.find({
        email: req.body.email
    })
    .exec();
    if(exists.length > 0) {
        res.send({
            status: "fail",
            error: "User Already Exists."
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
    SignUp
}
