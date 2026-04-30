import { Catalog, getCatalog } from '@features/catalog';

export default async function CatalogPage({
  searchParams
}: {
  searchParams?: Promise<
    Partial<{ 
      page: number;
      sortBy: string;
      order: string;
    }>>
}) {
  const params = await searchParams;
  const page = Number(params?.page) || 1;
  const { products, total } = await getCatalog(page, params?.sortBy, params?.order);

  return (
      <Catalog products={products} total={total} />
  );
}
