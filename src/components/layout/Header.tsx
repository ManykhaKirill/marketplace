import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { Search } from '@features/search';
import { CartWidget } from '@features/cart';

export const Header = () => {

    return (
        <header className="flex justify-start border-b border-gray-200 bg-white">
            <div className="flex w-full flex-row items-center justify-between mx-auto max-w-450 px-4 sm:px-6 lg:px-8 h-16 gap-6">
                <div className="flex font-semibold text-lg justify-start">
                    <Link href='/'>
                        Store
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