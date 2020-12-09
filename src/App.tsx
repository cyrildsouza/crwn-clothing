import React, { useState, useEffect } from 'react';
import { Route, Switch } from  'react-router-dom';
import HomePage from './pages/homePage/homePage';
import ShopPage from './pages/shopPage';
import Header from './components/header';
import SignInAndUp from './pages/signInAndUp';
import { auth } from './firebase';

export interface ICurrentUser {
    displayName?: string | undefined;
    email?: string | undefined;
}


const  App: React.FunctionComponent = () => {

    const [currentUser, setCurrentUser] = useState<ICurrentUser|null>(null);

    useEffect(() => {
        //TODO track user
        const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            if (user) {
                setCurrentUser({
                    displayName: user?.displayName|| '',
                    email: user?.email || '',
                });
            } else {
                setCurrentUser(null);
            }
        });
        return () => unsubscribeFromAuth();
    }, []);

    console.log('currentUser', currentUser);

    return (
        <div>
            <Header currentUser={currentUser}/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/shop" component={ShopPage}/>
                <Route exact path="/signin" component={SignInAndUp}/>
            </Switch>
        </div>
    );
};


export default App;
