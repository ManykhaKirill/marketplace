import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/logo.svg';
import { Search } from '@features/search';
import { CartWidget } from '@features/cart';

export const Header = () => {

    return (
        <header className="flex justify-start border-b border-gray-200 bg-white">
            <div className="flex w-full flex-row items-center justify-between mx-auto max-w-450 px-4 sm:px-6 lg:px-8 h-16 gap-6">
                <div className="flex font-semibold justify-start">
                    <Link href='/' className='flex flex-row items-center text-lg'>
                        <Image src={logo} alt="AnyStore" width={60} height={60} />
                        <h3 className='hidden lg:flex'>AnyStore</h3>
                    </Link>
                </div>
                <div className='flex flex-row w-full justify-center'>
                    <Search />
                </div>
                <div className="flex flex-row items-center justify-end">
                    <CartWidget />
                </div>
            </div>
        </header>
    )
}