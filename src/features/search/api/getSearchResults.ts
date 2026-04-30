import { API, LIMIT } from '@constants/constants';

export async function getSearchResults({
    page = 1, 
    query, 
    sortBy, 
    order
}: {
    page: number, 
    query: string, 
    sortBy: string, 
    order: string
}) {
    const params = sortBy || order ?
        `&sortBy=${sortBy}&order=${order}&limit=${LIMIT}&skip=${(page - 1) * LIMIT}` :
        `&limit=${LIMIT}&skip=${(page - 1) * LIMIT}`;

    const response = await fetch(`${API}/search?q=${query}${params}`);

    if(!response.ok) {
        console.error(`getSearchResults error: `, response.status);
    }
    const result = await response.json();
    return result;
}