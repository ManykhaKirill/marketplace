import { API,LIMIT } from '@constants/constants';

export type getAllRequest = {
    page: number;
};

export async function getRequest(category: string) {
        const response = await fetch(`${API}/${category}`, { next: { 'revalidate': 60 }});
        if(!response.ok) {
            throw new Error(`getRequest error: ${response.status}`);
        }
        const result = await response.json();
        return result;
}

export async function getAllRequest(page: number = 1, sortBy?: string, order?: string) {
        const params = sortBy || order ? 
            `&sortBy=${sortBy}&order=${order}&limit=${LIMIT}&skip=${(page - 1) * LIMIT}` :
            `limit=${LIMIT}&skip=${(page - 1) * LIMIT}`;

        const response = await fetch(`${API}?${params}`, 
            { next: { 'revalidate': 60 }}
        );
        if(!response.ok) {
            console.error('getRequest error', response.status);
        }
        const result = await response.json();
        return result;
}