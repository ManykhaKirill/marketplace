import Image from 'next/image';
import type { ProductType } from '../types';
import { AddItemButton } from '@components/common/AddItemButton';
import { Carousel } from '@components/common/Carousel';

export function Product({
    ...product
}: ProductType
) {
    return (
      <div className='flex flex-col w-full items-center'>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex">
            <Carousel
            autoSlide
              id={product.id}
              images={product.images} 
              alt={product.title} 
            />
            {/* <Image
              src={product.images[0]}
              alt={product.title}
              width={400}
              height={400}
              className="object-contain border border-gray-200 rounded-2xl"
            /> */}
          </div>

          <div>
            <h1 className="text-2xl font-semibold">
              {product.title}
            </h1>

            <p className="mt-4 text-gray-600">
              {product.description}
            </p>

            <p className="mt-6 text-2xl font-bold">
              ${product.price}
            </p>
            <AddItemButton product={product} />
          </div>
        </div>
    </div>
    )
}