/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { updateCartItemQuantity } from './utils/cartUtils';

export interface ICurrentUser {
    displayName?: string | undefined;
    email?: string | undefined;
    id: string,
}

export interface ICartItems {
    name: string;
    price: number;
    imageUrl: string;
    id: number;
    quantity?: number;
}

export interface IState {
    currentUser: ICurrentUser | null;
    showCartDropdown: boolean,
    cartItems: ICartItems[];
}

const initialState: IState = {
    currentUser: null,
    showCartDropdown: false,
    cartItems: [],
};

// eslint-disable-next-line
// @ts-ignore
export default (state = initialState, action) => {
    switch(action.type) {
    case 'SET_CURRENTUSER': 
        return {
            ...state,
            currentUser: action.data,
        };
    case 'TOGGLE_CART_DROPDOWN': 
        return {
            ...state,
            showCartDropdown: !state.showCartDropdown,
        };
    case 'ADD_CART_ITEM':
        const newCartItem = updateCartItemQuantity(state.cartItems, action.data);
        return {
            ...state,
            cartItems: newCartItem,
        };
    default:
        return state;
    }
};