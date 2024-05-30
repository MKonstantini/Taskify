import { Button } from "@/components/ui/button"

const TestPage = () => {
    return (
        <div className="text-center flex flex-col items-center">
            <header>
                <h1 className="text-4xl text-center mb-6">WELCOME TO TEST PAGE</h1>
                <h2>Testing: NextAuth, Prisma, Supabase.</h2>
            </header>
            <section className="flex flex-col w-72">
                <Button variant='destructive' className='mt-12 font-bold' size="lg">
                    Add logged in user to database
                </Button>
            </section>
        </div>
    )
}

const addLoggedUserToDB = async () => {

}

export default TestPage