'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, ShoppingBag } from 'lucide-react';
import type { ProductType } from '@features/product';
import { Button } from '../ui/Button';
import { useCartStore } from '@store/cartStore';

export function AddItemButton({
    product,
    quantity = 1,
}: {
    product: ProductType;
    quantity?: number
}){
    const [clicked, setClicked] = useState<boolean>(false);
    const { addToCart } = useCartStore();

    function handleAddToCart() {
        addToCart(product, quantity);
        setClicked(true);
    }

    return (
        clicked ? 
            <Link href={'/cart'}>
                <Button style='gap-2 mt-6 rounded-lg bg-amber-500 px-6 py-3 text-white hover:bg-amber-600'>
                        To cart
                    <ShoppingCart size={20} />
                </Button>
            </Link> :
            <Button
                style='gap-2 mt-6 rounded-lg bg-amber-500 px-6 py-3 text-white hover:bg-amber-600'
                action={handleAddToCart}
            >
                Add to cart
                <ShoppingBag size={20} />
            </Button>
        
    )
}