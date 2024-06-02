"use client"
import { signIn, signOut, useSession } from "next-auth/react"
import { Button } from "@/src/components/ui/button"
import { Logo } from "@/src/components/logo"
import Link from "next/link"

const AuthBtn = () => {
    const { data: session } = useSession()
    console.log(session?.user)

    if (!session?.user) {
        return (
            <Button onClick={() => signIn()} size='sm' variant='outline'>
                Login
            </Button>
        )
    }
    return (
        <Button onClick={() => signOut()} size='sm' variant='outline'>
            Logout
        </Button>
    )
}

export const Navbar = () => {
    return (
        <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
            <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
                <Logo />
                <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
                    <AuthBtn />
                    <Button size='sm' asChild>
                        <Link href='/api/auth/signin'>
                            Get Taskify for free
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}