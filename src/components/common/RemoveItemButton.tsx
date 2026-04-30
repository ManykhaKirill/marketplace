'use client';
import type { ReactNode } from 'react';
import { Button } from '../ui/Button';
import { useCartStore } from "@store/cartStore";

export function RemoveItemButton({
    children,
    id
}: {
    children?: ReactNode;
    id: number
}) {
    const { removeFromCart } = useCartStore();

    function handleClick(){
        removeFromCart(id)
    }
    
    return (
        <Button 
            action={handleClick}
            style='
                border border-amber-600 
                rounded-xl
                m-2 p-2 
                bg-amber-500
                hover:bg-amber-600
            '
        >
           {children ? children : <p className='text-white'>Remove</p>}
        </Button>
    )
}