import { ShoppingBasket } from 'lucide-react';
import { CatalogItemType } from '@features/catalog';

export function CartSummary({
    items
}: {
    items: CatalogItemType[]
}) {
    const calculateTotalCost: number = items.reduce((acc, item) => {
        return acc + item.price
    }, 0);

    return (
        <div className='
            flex flex-row
            items-center justify-center
            p-4 gap-4
            border border-gray-200
            rounded-xl
        '>
            <ShoppingBasket size={48} />
            <div className='flex flex-col'>
                <span className=''>Total items: {items?.length}</span>
                <span className=''>Total cost: ${calculateTotalCost.toFixed(2)}</span>
            </div>
        </div>
    )
}