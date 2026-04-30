export const API: string = 'https://dummyjson.com/products';

export const LIMIT: number = 12;

export const DEFAULT_ORDER = 'asc';

export const DEFAULT_SORT = 'price';

type DATA_TYPE = {
    [key: string]: {
        name: string, 
        value: {
            sortBy: string;
            order: string;
        }
    };
}

export const DATA_SORT: DATA_TYPE = {
        priceAsc: {
            name: 'priceAsc',
            value: { sortBy: 'price', order: 'asc' }
        },
        priceDesc: {
            name: 'priceDesc',
            value: { sortBy: 'price', order: 'desc' }
        },
        titleAsc: {
            name: 'titleAsc',
            value: { sortBy: 'title', order: 'asc' }
        },
        titleDesc: {
            name: 'titleDesc',
            value: { sortBy: 'title', order: 'desc' }
        }
}