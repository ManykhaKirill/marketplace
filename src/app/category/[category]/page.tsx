
import { getProductByCategory, Catalog } from '@features/catalog';

export default async function CategoryPage({
    params,
    searchParams
}: {
    params:  Promise<{ category: string }>;
    searchParams: Promise<{ 
        page: number;
        sortBy: string;
        order: string;
    }>
}) {
    const { category } = await params;
    const query = await searchParams;
    const { products, total } = await getProductByCategory(category, query?.page, query?.sortBy, query?.order);

    return (
            <Catalog products={products}total={total} />
    )
}