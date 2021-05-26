/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { updateCartItemQuantity, removeCartItemQuantity } from './utils/cartUtils';
import { persistReducer } from 'redux-persist';
import storage  from 'redux-persist/lib/storage';
import SHOP_DATA, { IShop } from './shopData';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cartItems'],
};

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

export interface ISection {
    title: string;
    imageUrl: string;
    id: number;
    linkUrl: string;
    size?: string;
}

export interface IDirectory {
    sections: ISection[];
}

export interface IState {
    currentUser: ICurrentUser | null;
    showCartDropdown: boolean;
    cartItems: ICartItems[];
    directory: IDirectory;
    shop: IShop,
}

const INITIAL_DIRECTORY = { sections: [
    {
        title: 'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        id: 1,
        linkUrl: 'shop/hats'
    },
    {
        title: 'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        id: 2,
        linkUrl: 'shop/jackets'
    },
    {
        title: 'sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        id: 3,
        linkUrl: 'shop/sneakers'
    },
    {
        title: 'womens',
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens'
    },
    {
        title: 'mens',
        imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
    }
]};

const initialState: IState = {
    currentUser: null,
    showCartDropdown: false,
    cartItems: [],
    directory: INITIAL_DIRECTORY,
    shop: SHOP_DATA,
};

// eslint-disable-next-line
// @ts-ignore
const rootReducer = (state = initialState, action) => {
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
    case 'CLEAR_CART_ITEM': 
        return {
            ...state,
            cartItems: state.cartItems.filter(({ id }) => id !== action.data),
        };
    case 'REMOVE_CART_ITEM': 
        return {
            ...state,
            cartItems: removeCartItemQuantity(state.cartItems, action.data),
        }; 
    default:
        return state;
    }
};

export default persistReducer(persistConfig, rootReducer);