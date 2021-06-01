import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from  'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import HomePage from './pages/homePage/homePage';
import ShopPage from './pages/shopPage';
import Header from './components/header';
import SignInAndUp from './pages/signInAndUp';
import { auth, createUserProfileDocument } from 'src/firebase/index.js';
import CheckoutPage from './pages/checkoutPage';

const mapStateToProps = ({ currentUser }) => ({
    currentUser,
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const App = () => {
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
