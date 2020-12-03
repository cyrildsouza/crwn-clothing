import React from 'react';
import './collectionItemStyle.scss';

interface Props {
    name: string;
    price: number;
    imageUrl: string;
}

const CollectionItem: React.FunctionComponent<Props> = ({ name, price, imageUrl }) => {
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
        </div>
    );
};

export default CollectionItem;
