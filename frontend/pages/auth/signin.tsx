import { NextPage } from "next";
import { FormEventHandler, useState } from "react";
import { signIn } from 'next-auth/react';
import Router from "next/router";

import GuestLayout from "@/layout/guest";
import Input from "@/components/input";
import Button from "@/components/button";
import { Validator } from "@/utils";

const SignIn: NextPage = (): JSX.Element => {
    const [userInfo, setUserInfo] = useState({ email: '', password: ''});
    const preventSubmit:FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
    }
    const handleSubmit = async () => {
        if (!Validator.email(userInfo.email)) {
            alert("Email is not valid!")
            return;
        }
        else if(!Validator.password(userInfo.password)) {
            alert("Password should be longer than 6!")
            return;
        }
        const res = await signIn('credentials', {
                email: userInfo.email,
                password: userInfo.password,
                redirect: false
        });
        if (res?.ok) Router.replace('/');
        else alert(res?.error);
    }
    return (
        <GuestLayout>
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
                    className="mb-2"
                />
                <Input
                    value={userInfo.password}
                    onChange={(val: string) => setUserInfo({...userInfo, password: val})}
                    type="password"
                    placeholder="Password"
                    className="mb-2"
                />
                <Button
                    className="w-1/3 mt-3"
                    onClick={handleSubmit}
                >
                    SignIn
                </Button>
            </form>
        </GuestLayout>
    )
}

export default SignIn;
