import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { IState } from '../../redux/reducer';
import CheckoutItem from '../checkoutItem';
import StripButton from '../../components/stripe';
import './checkoutStyle.scss';

const mapStateToProps = ({ cartItems }: IState) => ({
    cartItems,
    itemPriceTotal: cartItems.reduce((accumalateQuantity, item) => {
        return accumalateQuantity += item?.quantity ? item.quantity * item.price : 0;
    }, 0)
});

const Checkout: React.FC = () => {
    const { cartItems, itemPriceTotal } = useSelector(mapStateToProps, shallowEqual);
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((item) => <CheckoutItem key={item.id} item={item} />)}
            <div className='total'>
                <span>TOTAL: ${itemPriceTotal}</span>
            </div>
            <StripButton price={itemPriceTotal}/>
        </div>
    );
};

export default Checkout;
