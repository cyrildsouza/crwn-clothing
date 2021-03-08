import React from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    return (
        <div className="cart-icon" onClick={() => dispatch({ type: 'TOGGLE_CART_DROPDOWN'})}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    );
};

export default CartIcon;
