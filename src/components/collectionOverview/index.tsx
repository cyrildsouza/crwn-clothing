import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { IState } from '../../redux/reducer';
import CollectionPreview from '../../components/collectionPreview';
import './collectionOverViewStyle.scss';

const mapStateToProps = ({ shop }: IState) => ({
    collections: shop
});

const CollectionOvervirw: React.FunctionComponent = () => {
    const { collections } = useSelector(mapStateToProps, shallowEqual);
    const shops = Object.values(collections);
    return (
        <div className="collection-overview">
            {shops.map(({ id, title, items}) => {
                return (<CollectionPreview key={id} title={title} items={items}/>);
            })}
        </div>
    );
};

export default CollectionOvervirw;
