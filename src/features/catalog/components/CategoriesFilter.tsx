import { getCategories } from '../api/catalogApi';
import { CategorySelect } from './CategorySelect'

export async function CategoriesFilter() {
    const categories = await getCategories();

    return (
            <CategorySelect categories={categories} />
    )
}