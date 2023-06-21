import React from "react";
import { useSession } from "next-auth/react";
import Router from "next/router";

interface Props {
    children: JSX.Element | undefined
}

const UnAuthLayout: React.FC<Props> = ({children}: Props): JSX.Element => {
    const {status, data} = useSession();
    if (status == "authenticated") {
        Router.replace("/");
        return (<></>)
    }
    return (
        <>
            {children}
        </>
    )
}

export default UnAuthLayout;