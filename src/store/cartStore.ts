import { create, createStore } from "zustand";
import type { CatalogItemType } from '@features/catalog';

type StoreItemType = CatalogItemType & { quantity: number };

export type CartStore = {
    count: number;
    cartItems: StoreItemType[];
    addToCart: (item: CatalogItemType, quantity: number) => void;
    removeFromCart: (item: number) => void;
}

// export type CartActions = {
//     addToCart: (item: string, cartItems: string[]) => void;
//     removeFromCart: (item: string, cartItems: string[]) => void;
// }

//export type CartStore = CartState & CartActions;

// const defaultInitState: CartState = {
//     count: 0
// }

export const useCartStore = create<CartStore>((set, get) => ({
    count: 0,
    cartItems: [],
    addToCart: (item, quantity) => {
        const currentCart = get().cartItems;
        set({ cartItems: [...currentCart, {...item, quantity: quantity}] });
    },
    removeFromCart: (id) => {
        const currentCart = get().cartItems;
        set({ cartItems: currentCart.filter((item) => id != item.id) });
    }
}));

// export const createCartStore = (initState: CartCounter = defaultInitState) => {
//     return createStore<CartStore>()((set) => ({
//         ...initState,
//         increaseCounter: () => set((state) => ({ count: state.count + 1 })),
//         discreaseCounter: () => set((state) => ({ count: state.count - 1 }))
//     }))
// } 