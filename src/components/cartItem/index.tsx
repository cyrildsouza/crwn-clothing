import React from 'react';
import { ICartItems} from '../../redux/reducer';
import './cartItemStyle.scss';

interface Props {
    item: ICartItems
}

const CartItem: React.FunctionComponent<Props> = ({ item }) => {
    const { name, price, imageUrl, quantity } = item;
    return (
        <div className="cart-item">
            <img className="img" src={imageUrl} alt="item"></img>
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">{quantity} x {price}</span>
            </div>
        </div>
    );
};

export default CartItem;