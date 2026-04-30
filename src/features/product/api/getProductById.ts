import { API } from '@constants/constants';
import { ProductType } from '@features/product';

export async function getProductById(id: number): Promise<ProductType> {
    const response = await fetch(`${API}/${id}`,  { next: { 'revalidate': 60 }});
        if(!response.ok) {
            throw new Error(`getRequest error: ${response.status}`);
        }
        const result = await response.json();
        return result;
}