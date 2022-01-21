import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CollectionOverview from '../../components/collectionOverview';
import Category from '../category';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase';

interface IProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    match: any;
}
const Loading = () => (<i className="fas fa-spinner"></i>);
const ShopPage: React.FunctionComponent<IProps>= ({ match }) => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const collectionRef = firestore.collection('collections');

        // fetch('https://firestore.googleapis.com/v1/projects/crwn-db-31cea/databases/(default)/documents/collections')
        //     .then(response => response.json())
        //     .then(colllections => console.log(colllections));

        // Promise Pattern
        collectionRef.get().then((snapshot) => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch({
                type: 'SET_SHOP',
                data: collectionsMap,
            });
            setIsLoading(false);
        });


        // Observable Pattern
        // const unsunscribeFromSnapshot = collectionRef.onSnapshot(async(snapshot) => {
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        //     dispatch({
        //         type: 'SET_SHOP',
        //         data: collectionsMap,
        //     });
        // });
        // setIsLoading(false);
        // return () => {
        //     unsunscribeFromSnapshot();
        // };
    }, [dispatch]);
    
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={isLoading ?  Loading : CollectionOverview} />
            <Route path={`${match.path}/:category`} component={Category} />
        </div>
    );
};

export default ShopPage;
