import { ContainerGrid } from '@components/ui/container-grid';
import { EmptyResult } from '@components/ui/empty-result';
import { Pagination } from '@components/layout/Pagination';

import type { CatalogItemType } from '../types';
import { CatalogItem } from './CatalogItem';



export async function Catalog({ 
    products,
    total
}: {
    products: CatalogItemType[];
    total: number;
}) {
    
    return (
        total > 0 ? (
            <>
                <ContainerGrid>
                    {products.map((item: CatalogItemType) => (
                        <CatalogItem key={item.id} {...item} />
                    ))}
                </ContainerGrid>
                <Pagination total={total} />
            </>
        ) : (
            <EmptyResult/>
        )
        
    )
}