import Image from "next/image"
import Link from "next/link"

// fonts and cn practice
import { cn } from "@/lib/utils"
import { Roboto } from 'next/font/google'
const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
})

export const Logo = () => {
    return (
        <Link href='/' className={cn(roboto)}>
            <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex ">
                <Image src='/logo.svg' alt="logo" height={30} width={30}></Image>
                <p className="text-neutral-700 pb-1 text-lg">Taskify</p>
            </div>
        </Link>
    )
}