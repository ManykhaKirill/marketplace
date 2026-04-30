'use client';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@store/cartStore';

export function CartWidget() {
    const { cartItems } = useCartStore();

    return (
        <div className='flex flex-row items-center gap-2'>
            <Link
                href='/cart'
            >
                <ShoppingCart size={24}/>
            </Link>
            <span className='
                bg-amber-500
                text-white 
                rounded-full 
                px-2'
            >
                {cartItems.length}
            </span>
        </div>
    )
}