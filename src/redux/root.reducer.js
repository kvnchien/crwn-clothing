import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

//The root reducer represents the overall reducer for all other reducers
export default combineReducers({
    user: userReducer,
    cart: cartReducer
})