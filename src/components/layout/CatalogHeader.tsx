import { Suspense } from 'react';
import { CategoriesFilter } from '@features/catalog';
import { Sort, SortSkeleton } from '@features/catalog';
import { BreadCrumbs } from './BreadCrumbs';

export function CatalogHeader() {
    return (
        <div className='flex flex-row items-center justify-between mb-4 gap-4'>
            <div className='flex flex-row justify-start'>
                <CategoriesFilter />
            </div>
            <BreadCrumbs />
            <div className='flex flex-row justify-end'>
                <Suspense fallback={<SortSkeleton />}>
                    <Sort />
                </Suspense>
            </div>
        </div>
    )
}