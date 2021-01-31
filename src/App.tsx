import React, { useState, useEffect } from 'react';
import { Route, Switch } from  'react-router-dom';
import { useDispatch } from 'react-redux';
import HomePage from './pages/homePage/homePage';
import ShopPage from './pages/shopPage';
import Header from './components/header';
import SignInAndUp from './pages/signInAndUp';
import  { ICurrentUser } from './redux/reducer';
import { auth, createUserProfileDocument } from './firebase';

const  App: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const [currentUser, setCurrentUser] = useState<ICurrentUser|null>(null);

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
                <Route exact path="/signin" component={SignInAndUp}/>
            </Switch>
        </div>
    );
};


export default App;
