import React, { useState} from 'react';
import { SHOP_DATA } from './shopData';
import CollectionPreview from '../../components/collectionPreview';
import { IShop } from './shopData';

const ShopPage: React.FunctionComponent = () => {

    const [collections, setCollections] = useState<IShop[]>(SHOP_DATA);
    return (
        <div className="shop-page">
            {collections.map(({ id, title, items }) => {
                return (<CollectionPreview key={id} title={title} items={items}/>);
            })}
        </div>
    );
};

export default ShopPage;
