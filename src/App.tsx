import React from 'react';
import { Route, Switch } from  'react-router-dom';
import HomePage from './pages/homePage/homePage';
import ShopPage from './pages/shopPage';
import Header from './components/header';

const  App: React.FunctionComponent = () => (
    <div>
        <Header />
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/shop" component={ShopPage}/>
        </Switch>
    </div>
);


export default App;
