import { CategoriesFilter } from '@features/catalog';
import { Sort } from '@features/catalog';
import { BreadCrumbs } from './BreadCrumbs';

export function CatalogHeader() {
    return (
        <div className='flex flex-row items-center justify-between mb-4 gap-4'>
            <div className='flex flex-row justify-start'>
                <CategoriesFilter />
            </div>
            <BreadCrumbs />
            <div className='flex flex-row justify-end'>
                <Sort />
            </div>
        </div>
    )
}