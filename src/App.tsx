import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from  'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import HomePage from './pages/homePage/homePage';
import ShopPage from './pages/shopPage';
import Header from './components/header';
import SignInAndUp from './pages/signInAndUp';
import  { IState } from  './redux/reducer';
import { auth, createUserProfileDocument } from './firebase';

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
                    console.log('user', {
                        id: snapShot.id,
                        ...snapShot.data(),
                    });
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
                <Route exact path="/shop" component={ShopPage}/>
                <Route exact path="/signin" render={() => currentUser ? <Redirect to='/' /> : <SignInAndUp /> }/>
            </Switch>
        </div>
    );
};


export default App;
