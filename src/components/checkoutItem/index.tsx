import React from 'react';
import { useDispatch } from 'react-redux';
import { ICartItems } from '../../redux/reducer';
import './checkoutItemStyle.scss';

interface IProps {
    item: ICartItems;
}

const CheckoutItem: React.FC<IProps> = ({ item }) => {
    const { name, quantity, price, imageUrl, id} = item;
    const dispatch = useDispatch();
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl}/>
            </div>
            <span className='name'>
                {name}
            </span>
            <span className='quantity'>
                <div className='arrow' onClick={() => dispatch({ type: 'REMOVE_CART_ITEM', data: item})}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => dispatch({ type: 'ADD_CART_ITEM', data: item})}>&#10095;</div>
            </span>
            <span className='price'>
                {price}
            </span>
            <div
                className='remove-button'
                onClick={() => {
                    dispatch({
                        type: 'CLEAR_CART_ITEM',
                        data: id,
                    });
                }}
            >&#10005;</div>
        </div>
    );
};

export default CheckoutItem;
