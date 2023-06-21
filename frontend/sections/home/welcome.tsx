import React from "react";
import { signOut } from 'next-auth/react';

import Button from "../../components/button";

interface Props {
    username: string | null | undefined
}

const Welcome: React.FC<Props> = ({username}: Props): JSX.Element => {

    const handleLogout = async () => {
        await signOut({callbackUrl: '/'});
    }

    return (
        <>
            <p className="text-xl mb-5">
                Hey, <span className="font-bold">{username}</span>! You're logged in.
            </p>
            <Button onClick={handleLogout}>Logout</Button>
        </>
    )
}

export default Welcome
