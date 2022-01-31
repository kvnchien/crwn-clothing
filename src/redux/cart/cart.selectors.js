import { createSelector } from 'reselect';

/*
There are two type of selectors:
- Input Selector: it uses "Create Selector" to create the Input Selector
- Output Selector: it users Input Selector and Create Selector to create the Output Selector
*/
const selectCart = state => (state.cart);
//const selectUser = state => (state.user);

//Chain with the 'selectCart'
export const selectCartItems = createSelector(
    // [selectCart, selectUser],
    // (cart, user) => cart.cartItems
    [selectCart],
    cart => cart.cartItems
);

//Then chain with the 'selectCartItems' 
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) =>
            accumulatedQuantity + cartItem.quantity, 0
    )
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedTotal, cartItem) =>
            accumulatedTotal + cartItem.quantity * cartItem.price, 0 
    )
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

