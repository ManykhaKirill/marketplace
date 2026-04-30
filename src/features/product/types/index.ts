import { CatalogItemType } from '@features/catalog';

export type ProductType = CatalogItemType & { images: string[] };