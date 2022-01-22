import { createSelector } from 'reselect';

/*
There are two type of selectors:
- Input Selector: it uses "Create Selector" to create the Input Selector
- Output Selector: it users Input Selector and Create Selector to create the Output Selector
*/
const selectCart = state => (state.cart);
//const selectUser = state => (state.user);

export const selectCartItems = createSelector(
    // [selectCart, selectUser],
    // (cart, user) => cart.cartItems
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) =>
            accumulatedQuantity + cartItem.quantity, 0
    )
)