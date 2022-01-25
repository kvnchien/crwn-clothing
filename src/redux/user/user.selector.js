import { createSelector } from 'reselect';

const selectUser = state => state.user;

//const selectCart = state => state.cart;

export const selectCurrentUser = createSelector(
    //You can do this 'ordered items' too. Just separate the selectors with comma
    //without using an array
    //selectUser, selectCart,
    //[selectUser, selectCart],
    [selectUser],
    (user) => user.currentUser
)