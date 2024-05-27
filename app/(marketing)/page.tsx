import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Medal } from 'lucide-react'
import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'


const font1 = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

const MarketingPage = () => {
    return (
        <div className={cn('flex items-center justify-center flex-col', font1)}>
            <header className='flex items-center justify-center flex-col font-bold mb-5'>
                <div className='mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase'>
                    <Medal className='h-6 w-6 me-2'></Medal>
                    <div>#1 Task Management</div>
                </div>
                <h1 className='text-3xl md:text-6xl text-center text-neutral-800 mb-6'>Taskify helps team move</h1>
                <div className='text-3xl md:tex-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 pb-3 rounded-md w-fit '>
                    work forward.
                </div>
            </header>
            <section>
                <p className='text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto'>Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is uniue - accomplish it all with Taskify.</p>
                <div className='flex justify-center'>
                    <Button className='mt-6 font-bold w-auto' size="lg" asChild>
                        <Link href={'/sign-up'}>Get Taskify for free</Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}

export default MarketingPage