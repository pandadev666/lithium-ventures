import { NextPage } from "next";
import { useSession } from 'next-auth/react';

interface Props {}

const Home: NextPage = (props: Props): JSX.Element => {
    const {status, data} = useSession();

    return (
        <div>
            Welcome
        </div>
    )
}

export default Home;
