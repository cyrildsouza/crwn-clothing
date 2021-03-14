import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { IState} from '../../redux/reducer';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const mapStateToProps = ({ cartItems }: IState) => ({
    itemCount: cartItems.reduce((accumalateQuantity, item) => {
        return accumalateQuantity += item?.quantity || 0;
    }, 0)
});

const CartIcon: React.FunctionComponent = ({ }) => {
    const { itemCount } = useSelector(mapStateToProps, shallowEqual);
    const dispatch = useDispatch();
    return (
        <div className="cart-icon" onClick={() => dispatch({ type: 'TOGGLE_CART_DROPDOWN'})}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{itemCount}</span>
        </div>
    );
};

export default CartIcon;
