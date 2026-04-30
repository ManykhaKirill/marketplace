import Image from 'next/image';
import type { CatalogItemType } from "@features/catalog";
import { CartItemActions } from './CartItemActions';

export function CartItem({
    id,
    title,
    description,
    price,
    thumbnail
}: CatalogItemType
) {
    return (
        <div className='
            col-span-2 
            lg:max-h-62 
            rounded-xl
            border border-gray-200
            
        '>
            <div className='flex flex-col lg:flex-row'>
                <div className='flex flex-1'>
                    <div className='
                            bg-white
                            rounded-l-xl
                            border border-gray-200
                            overflow-hidden
                            '>
                        <div className='relative aspect-square bg-neutral-100 h-58'>
                            <Image 
                                src={thumbnail}
                                alt={title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="
                                            object-cover
                                            transition-transform
                                            duration-300
                                            group-hover:scale-105
                                        "
                            />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <div className="flex flex-col flex-1 p-4 space-y-1 ">
                        <h3 className="text-xl font-medium text-neutral-900 line-clamp-2">
                            {title}
                        </h3>
                        <p className="text-xl font-medium text-neutral-900 line-clamp-2">
                            {description}
                        </p>
                        <p className="text-2xl font-semibold text-neutral-900">
                            ${price}
                        </p>
                    </div>

                    <div className='flex flex-row justify-end m-4'>
                        <CartItemActions id={id} />
                    </div>
                </div>
            </div>
        </div>
    )
}