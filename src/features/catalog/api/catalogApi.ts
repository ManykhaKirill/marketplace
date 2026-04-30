import { API, LIMIT } from '@constants/constants';
import { getAllRequest } from '@lib/requests';

export async function getCatalog(page: number = 1, sortBy?: string, order?: string) {
    const response = await getAllRequest(page, sortBy, order);
    return response
}

export async function getCategories() {
    const response = await fetch(`${API}/category-list`);
    if(!response.ok) console.error('getCategories error', response.status);

    const result = await response.json();
    return result;
}

export async function getProductByCategory(category: string, page: number = 1, sortBy?: string, order?: string) {
    const params = sortBy || order ? 
                `&sortBy=${sortBy}&order=${order}&limit=${LIMIT}&skip=${(page - 1) * LIMIT}` :
                `limit=${LIMIT}&skip=${(page - 1) * LIMIT}`;

    const response = await fetch(`${API}/category/${category}?${params}`);
    if(!response.ok) console.error('getProductByCategory error', response.status);

    const result = await response.json();
    return result;
}