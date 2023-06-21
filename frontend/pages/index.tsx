import { NextPage } from "next";
import { useSession } from "next-auth/react";

import Welcome from "@/sections/home/welcome";
import Connect from "@/sections/home/connect";

interface Props {}

const Home: NextPage = (props: Props): JSX.Element => {
    const {status, data} = useSession();

    if (status == "authenticated") {
        return (
            <Welcome username={data.user?.name}/>
        )   
    }

    else if (status == "unauthenticated") {
        return (
            <Connect />
        )
    }
    return <></>
}

export default Home;
