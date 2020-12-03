import React from 'react';
import { IItems } from '../../pages/shopPage/shopData';
import CollectionItem from '../collectionItem';
import './collectionPreviewStyle.scss';

interface Props {
    title: string;
    items: IItems[];
}

const CollectionPreview: React.FunctionComponent<Props> = ({ title, items}) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items.filter((item, index) => index < 4).map(({ id, name, imageUrl, price}) => {
                    return(
                        <CollectionItem key={id} name={name} price={price} imageUrl={imageUrl}/>
                    );
                })}
            </div>
        </div>
    );
};

export default CollectionPreview;
