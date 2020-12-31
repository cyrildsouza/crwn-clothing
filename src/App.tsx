import React, { useState, useEffect } from 'react';
import { Route, Switch } from  'react-router-dom';
import HomePage from './pages/homePage/homePage';
import ShopPage from './pages/shopPage';
import Header from './components/header';
import SignInAndUp from './pages/signInAndUp';
import { auth, createUserProfileDocument } from './firebase';

export interface ICurrentUser {
    displayName?: string | undefined;
    email?: string | undefined;
    id: string,
}


const  App: React.FunctionComponent = () => {

    const [currentUser, setCurrentUser] = useState<ICurrentUser|null>(null);

    useEffect(() => {
        //TODO track user
        const unsubscribeFromAuth = auth.onAuthStateChanged(async (user) => {
            if (user) {
                const userRef = await createUserProfileDocument(user);
                userRef?.onSnapshot((snapShot) => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data(),
                    });
                });
            } else {
                setCurrentUser(null);
            }
        });
        return () => unsubscribeFromAuth();
    }, []);

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
