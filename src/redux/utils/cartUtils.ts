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