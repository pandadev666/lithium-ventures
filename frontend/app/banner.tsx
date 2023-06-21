import React from "react"
import Image from "next/image";
import Link from "next/link";

const Banner: React.FC = (): JSX.Element => {
    return (
        <Link href="/">
            <div className="flex flex-row items-center">
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/favicon.png"
                    alt="Lithium Ventures Logo"
                    width={180}
                    height={37}
                    priority
                />
                <p className="text-4xl">Welcome to my <span className="font-bold tracking-widest">MVP</span></p>
            </div>
        </Link>
    )
}

export default Banner
