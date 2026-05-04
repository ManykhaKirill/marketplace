import { getProductById } from '@features/product/api/getProductById';
import { Product } from '@features/product';

export default async function ProductPage({
    searchParams
}: {
    searchParams: Promise<{ productId: number }>
}) {
    const { productId } = await searchParams;
    const product = await getProductById(productId);

    return (
            <Product {...product} />
    )
}