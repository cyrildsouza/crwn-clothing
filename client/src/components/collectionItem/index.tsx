import React from 'react';
import { useDispatch } from 'react-redux';
import CustomButton from '../customButton';
import './collectionItemStyle.scss';

interface Props {
    item : {
        name: string;
        price: number;
        imageUrl: string;
    }
}

const CollectionItem: React.FunctionComponent<Props> = ({ item }) => {
    const { name, price, imageUrl } = item;
    const dispatch = useDispatch();
    return (
        <div className="collection-item">
            <div className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton inverted onClick={() => dispatch({ type: 'ADD_CART_ITEM', data: item})}>ADD TO CART</CustomButton>
        </div>
    );
};

export default CollectionItem;
