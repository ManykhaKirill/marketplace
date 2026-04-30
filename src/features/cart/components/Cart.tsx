'use client';
import { useCartStore } from '@store/cartStore';
import type { CatalogItemType } from '@features/catalog';
import { EmptyResult } from '@components/ui/empty-result';
import { CartItem } from './CartItem';
import { CartSummary } from './CartSummary';


export function Cart() {
    const { cartItems } = useCartStore();
//grid grid-cols-1 gap-6 lg:grid-cols-3
    return (
        cartItems?.length > 0 ? (
            <div className='flex flex-col lg:flex-row gap-2'>
                <div className='flex flex-col gap-6 lg:min-w-3/4'>
                    {cartItems?.map((item: CatalogItemType) => (
                        <CartItem key={item.id} {...item} />
                    ))}
                </div>
                <div className='flex flex-col w-full'>
                    <CartSummary items={cartItems}/>
                </div>
            </div>
            ) : (
            <EmptyResult categoryName='Cart' toMain/>
        )
    )
}