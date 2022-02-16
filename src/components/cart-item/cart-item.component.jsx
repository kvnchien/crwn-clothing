import React from 'react';

import './cart-item.styles.scss';

/*
 const CartItem = ({ cartItem }) => (
    <div className='cart-item'>
        <img src={cartItem.imageUrl} alt='item'/>
        <div className='item-details'>
            <span className='name'>{cartItem.name}</span>
            <span className='price'>{cartItem.quantity} x ${cartItem.price}</span>
        </div>
    </div>
);
*/

//a. This 'cartItem' is a property object that's passed from the cart-dropdown.component.jsx. The name
//   'cartItem' name here has to match the prop name defined in the <CartItem/> component 
//   inside the cart-dropdown.component.jsx

//b. The 'cartItem' object is a dictionary containing the imageUrl, price, name, quantity information.. 
//   These values are destructured from the props along with the 'cartItem' object itself.
//   See above code block without using the desructuring construct... 
const CartItem = ({ cartItem: { imageUrl, price, name, quantity }}) => (
    <div className='cart-item'>
        <img src={imageUrl} alt='item'/>
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} x ${price}</span>
        </div>
    </div>
);

export default CartItem;
