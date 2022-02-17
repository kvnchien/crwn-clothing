import { CartActionTypes } from "./cart.types";

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

//This is an Action Creater that returns an action object {type: CartActionTypes.ADD_ITEM, payload: item}
export const addItem = item => {
    console.log("===> Executing addItem action. The action's item for setting the payload is: ")
    console.log(item)
    return({
        type: CartActionTypes.ADD_ITEM,
        payload: item
    })
};

export const removeItem = item => ({ 
    type: CartActionTypes.REMOVE_ITEM,
    payload:item
});

export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload:item
});