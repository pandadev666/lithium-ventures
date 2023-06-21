import React from "react";
import Link from "next/link";

import Button from "@/components/button";

const Connect: React.FC = (): JSX.Element => {
    return (
        <div className="flex flex-row items-center">
            <Link href="/auth/signin">
                <Button className="mr-5">Connect</Button>
            </Link>
            <span className="text-xl font-bold">or</span>
            <Link href="/auth/signup">
                <Button className="ml-5">Register</Button>
            </Link>
        </div>
    )
}

export default Connect;
