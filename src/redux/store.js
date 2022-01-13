import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

//The middlewares that we are going to pass into the 'createStore' function is an array. 
//So we just add the logger object to an array and assign to the middlewares object
const middlewares = [logger];
//Create the store and attach the reducer and middlewares to the store
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;