import { Suspense } from 'react';
import { Catalog, CatalogSkeleton } from '@features/catalog';
import { getSearchResults } from '@features/search';

export default async function SearchPage({ 
  searchParams 
}: {
    searchParams: Promise<{
      page: number;
      query: string; 
      sortBy: string;
      order: string;
    }>
  }) {
    const params = await searchParams;
    const page = Number(params?.page) || 1;
    const { products, total } = await getSearchResults({
        page: page,
        query: params.query,
        sortBy: params?.sortBy, 
        order: params?.order
      });

    return (
        <Catalog products={products} total={total} />
    )
}