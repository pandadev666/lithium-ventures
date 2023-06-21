import { NextPage } from "next";
import { FormEventHandler, useState } from "react";
import Router from "next/router";

import UnAuthLayout from "@/layout/unauthlayout";

import Input from "@/components/input";
import Button from "@/components/button";

import { Validator } from "@/utils";
import * as API from "@/api";

interface Props {}

const SignUp: NextPage = (props): JSX.Element => {
    const [userInfo, setUserInfo] = useState({ email: '', name: '', password: '', confirmpassword: ''});
    const preventSubmit:FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
    }
    const handleSubmit = async () => {
        if (!Validator.email(userInfo.email)) {
            alert("Email is invalid!");
            return;
        }
        else if(!Validator.string(userInfo.name)) {
            alert("You should input name!");
            return;
        }
        else if(!Validator.password(userInfo.password)) {
            alert("Password should be longer than 6!");
            return;
        }
        else if(!Validator.password(userInfo.confirmpassword)) {
            alert("Confirming password should be longer than 6!");
            return;
        }
        else if(userInfo.password != userInfo.confirmpassword) {
            alert("Password confirmation failed!");
            return;
        }
        try {
            const response = await API.signup(userInfo);
            if (response.status == "success") {
                Router.replace("/auth/signin");
            }
            else {
                alert(response.error)
            }
        } catch (e) {
            alert("Server Error!")
        }
    }
    return (
        <UnAuthLayout>
            <form
                className="flex flex-col items-center w-80"
                onSubmit={preventSubmit}
                noValidate
            >
                <Input
                    value={userInfo.email}
                    onChange={(val: string) => setUserInfo({...userInfo, email: val})}
                    type="email"
                    placeholder="Email"
                />
                <Input
                    value={userInfo.name}
                    onChange={(val: string) => setUserInfo({...userInfo, name: val})}
                    type="text"
                    placeholder="Name"
                />
                <Input
                    value={userInfo.password}
                    onChange={(val: string) => setUserInfo({...userInfo, password: val})}
                    type="password"
                    placeholder="Password"
                />
                <Input
                    value={userInfo.confirmpassword}
                    onChange={(val: string) => setUserInfo({...userInfo, confirmpassword: val})}
                    type="password"
                    placeholder="Confirm Password"
                />
                <Button
                    className="w-1/3 mt-3"
                    onClick={handleSubmit}
                >
                    SignUp
                </Button>
            </form>
        </UnAuthLayout>
    )
}

export default SignUp;
