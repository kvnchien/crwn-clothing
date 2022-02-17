 export const addItemToCart = (cartItems, cartItemToAdd) => {

  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );
  
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
    
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {

  //Get the cartItem that's marked for removal from the cartItems
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  )

  //If the existingCartItem quantity is 1, we just remove the entire cartItem
  if(existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  }

  //So the existingCartItem has > 1 quantity, we need to reduce the count... 
  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id 
      ? { ...cartItem, quantity: cartItem.quantity -1 }
      : cartItem //Can we just ignore this line? becasue nothing to do to reduce the quantity count anyway.. 
  );
};