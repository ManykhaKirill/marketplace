import { getProductById } from '@features/product/api/getProductById';
import { Product } from '@features/product';

export default async function ProductPage({
    params
}: {
    params: Promise<{ id: number }>
}) {
    const { id } = await params;
    const product = await getProductById(id);

    return (
            <Product {...product} />
    )
}