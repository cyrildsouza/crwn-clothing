import { ICartItems } from '../reducer';

export const updateCartItemQuantity = (cartItems: ICartItems[], newItem: ICartItems): ICartItems[] => {
    console.log('newItem', newItem);
    const cartItemFound = cartItems.find((item) => (item.id === newItem.id));
    if (cartItemFound) {
        return cartItems.map((item) => {
            const quantity = item.quantity || 1;
            if(item.id === newItem.id)
                return {
                    ...item,
                    quantity: quantity + 1,
                };
            return item;
        });
    } 
    return [...cartItems, { ...newItem, quantity: 1 }];
};

export const removeCartItemQuantity = (cartItems: ICartItems[], cartItem: ICartItems) : ICartItems[] => {
    return cartItems.map(({ id, quantity, ...item }) => {
        if (id === cartItem.id)
            return {
                id,
                quantity: quantity ? quantity - 1 : 0,
                ...item,
            };
        return {
            id,
            quantity,
            ...item,
        };
    }).filter(item => item?.quantity && item.quantity > 0);
};
