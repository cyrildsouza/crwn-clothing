import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from  'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import HomePage from './pages/homePage/homePage';
import ShopPage from './pages/shopPage';
import Header from './components/header';
import SignInAndUp from './pages/signInAndUp';
import  { IState } from  './redux/reducer';
import { auth, createUserProfileDocument, //addCollectionAndDocuments 
} from './firebase/index';
import CheckoutPage from './pages/checkoutPage';

const mapStateToProps = ({ currentUser }: IState) => ({
    currentUser,
});

const  App: React.FunctionComponent = () => {
    const { currentUser } = useSelector(mapStateToProps, shallowEqual);
    const dispatch = useDispatch();
   
    useEffect(() => {
        const unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
            if (user) {
                const userRef = await createUserProfileDocument(user);
                userRef?.onSnapshot((snapShot) => {
                    dispatch({
                        type: 'SET_CURRENTUSER',
                        data: {
                            id: snapShot.id,
                            ...snapShot.data(),
                        }
                    });
                });
            } else {
                dispatch({
                    type: 'SET_CURRENTUSER',
                    data: null,
                });
            }
        });
        return () => unsubscribeFromAuth();
    }, [dispatch]);

    // useEffect(() => {
    //     const shopArray = Object.values(shop);
    //     (async() => {
    //         await addCollectionAndDocuments('collections', shopArray.map(({ title, items}) => ({ title, items})));
    //     })();
        
    // },[shop]);

    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/shop" component={ShopPage}/>
                <Route exact path="/signin" render={() => currentUser ? <Redirect to='/' /> : <SignInAndUp /> }/>
                <Route exact path="/checkout" component={CheckoutPage}/>
            </Switch>
        </div>
    );
};


export default App;
