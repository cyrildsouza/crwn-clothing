import React from 'react';
import { Route, Switch } from  'react-router-dom';
import HomePage from './pages/homePage/homePage';
import ShopPage from './pages/shopPage';

const  App: React.FunctionComponent = () => (
    <div>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/shop" component={ShopPage}/>
        </Switch>
    </div>
);


export default App;
