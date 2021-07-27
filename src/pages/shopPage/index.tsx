import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CollectionOverview from '../../components/collectionOverview';
import Category from '../category';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase';

interface IProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    match: any;
}

const ShopPage: React.FunctionComponent<IProps>= ({ match }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('khdskfhksd');
        const collectionRef = firestore.collection('collections');
        const unsunscribeFromSnapshot = collectionRef.onSnapshot(async(snapshot) => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch({
                type: 'SET_SHOP',
                data: collectionsMap,
            });
        });
       
        return () => {
            unsunscribeFromSnapshot();
        };
    }, [dispatch]);
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:category`} component={Category} />
        </div>
    );
};

export default ShopPage;
