import React from 'react';
import { Route } from 'react-router-dom';
import CollectionOverview from '../../components/collectionOverview';
import Category from '../category';

interface IProps {
    match: any;
}

const ShopPage: React.FunctionComponent<IProps>= ({ match }) => {
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:category`} component={Category} />
        </div>
    );
};

export default ShopPage;
