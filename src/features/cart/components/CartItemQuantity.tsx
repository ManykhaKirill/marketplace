import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export function CartItemQuantity({
    id
}: {
    id: number;
}) {
    const [quantity, setQuantity] = useState(1);

    function increaseQuantity() {
        setQuantity(quantity => quantity + 1);
    }

    function descreaseQuantity() {
        setQuantity(quantity => quantity - 1);
    }

    return (
        <div 
        className="
            flex flex-row
            items-center
            gap-2
            rounded-xl
        "
        >
            <Minus 
                size={20} 
                onClick={descreaseQuantity}
                className='
                rounded-xl
                text-white
                bg-amber-500
                hover:bg-amber-600
                '
            />
                <span>{quantity}</span>
            <Plus 
                size={20} 
                onClick={increaseQuantity}
                className='
                rounded-xl
                text-white
                bg-amber-500
                hover:bg-amber-600
                '
            />
        </div>
    )

}