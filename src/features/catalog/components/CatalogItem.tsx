import Image from 'next/image';
import Link from 'next/link';
import type { CatalogItemType } from '../types';

export function CatalogItem({
    ...item
}: CatalogItemType
) {
    return (
        
            <Link 
                href={`/product/${item.id}`}
                className='
                    lg:max-h-88
                    group
                    block
                    bg-white
                    rounded-xl
                    border border-gray-200
                    overflow-hidden
                    transition-all
                    duration-300
                    hover:shadow-lg
                    hover:-translate-y-1'
            >
                <div className='relative aspect-square bg-neutral-100'>
                    <Image 
                        src={item?.thumbnail}
                        alt={item.title}
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
                    <div className="p-4 space-y-1">
                        <h3 className="text-sm font-medium text-neutral-900 line-clamp-2">
                            {item.title}
                        </h3>
                        <p className="text-lg font-semibold text-neutral-900">
                            ${item.price}
                        </p>
                    </div>
            </Link>
        
    )
};