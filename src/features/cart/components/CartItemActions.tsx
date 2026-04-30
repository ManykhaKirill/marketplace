'use client';
import { useCartStore } from "@store/cartStore";
import { Trash } from 'lucide-react';
import { RemoveItemButton } from '@components/common/RemoveItemButton';
import { CartItemQuantity } from './CartItemQuantity';


export function CartItemActions({
    id
}: {
    id: number
}) {
    

    return (
        <div className='flex flex-row gap-2'>
            <RemoveItemButton id={id}>
                <Trash size={18} className="text-white"/>
            </RemoveItemButton>
            <CartItemQuantity id={id} />
        </div>
    )
}

 