import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import reducer from './reducer';

const middlewares = [];

if (process.env.NODE_ENV === 'development')
    middlewares.push(logger);
const store = createStore(reducer, applyMiddleware(...middlewares));

const  persistor = persistStore(store);

export default store;
export { persistor };
