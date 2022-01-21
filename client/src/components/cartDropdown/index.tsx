import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CustomButton from '../customButton';
import { IState, ICartItems} from '../../redux/reducer';
import CartItem from '../cartItem';
import './cart-dropdown.styles.scss';

const mapStateToProps = ({ showCartDropdown, cartItems }: IState) => ({
    showCartDropdown,
    cartItems
});

const CartDropdown: React.FunctionComponent = () => {
    const { cartItems } = useSelector(mapStateToProps, shallowEqual);
    const dispatch = useDispatch();
    const history = useHistory();
    return (
        <div className="cart-dropdown">
            {cartItems.length > 0 ? 
                <div className="cart-items">
                    {cartItems.map((item: ICartItems) => (<CartItem key={item.id} item={item}/>))}
                </div>
                : <span className='empty-message'>Your cart is empty</span>}
            <CustomButton
                onClick={() => {
                    history.push('/checkout');
                    dispatch({
                        type: 'TOGGLE_CART_DROPDOWN',
                    });
                }}
            >
                GO TO CHECKOUT
            </CustomButton>
        </div>
    );

   
};

export default CartDropdown;
