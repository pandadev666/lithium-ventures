import React from "react";
import { useSession } from "next-auth/react";
import Router from "next/router";

interface LayoutProps {
    children?: JSX.Element
}

const GuestLayout: React.FC<LayoutProps> = ({
    children = <></>
}: LayoutProps): JSX.Element => {
    const { status } = useSession();
    if (status == "authenticated") {
        Router.replace("/");
        return <></>
    }
    return (
        <>{children}</>
    )
}

export default GuestLayout;
