import { CartActionTypes } from "./cart.types";

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => {
    console.log("===> Executing addItem action. The action's item for setting the payload is: ")
    console.log(item)
    return({
        type: CartActionTypes.ADD_ITEM,
        payload: item
    })
};