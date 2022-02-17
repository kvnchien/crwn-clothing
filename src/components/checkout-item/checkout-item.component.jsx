import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';


// const CheckoutItem = ({ cartItem }) => (
//     <div className='checkout-item'>
//         <div className='image-container'>
//             <img alt='item' src={cartItem.imageUrl}/>
//         </div>
//         <span className='name'>{cartItem.name}</span>
//         <span className='quantity'>{cartItem.quantity}</span>
//         <span className='price'>{cartItem.price}</span>

//         {/*  https://www.w3schools.com/charsets/ref_utf_dingbats.asp */}
//         <div className='remove-button'>&#10005;</div>
//     </div>
// );


//a. This 'cartItem' is a property object that's passed from the checkout-page.component.jsx. The name
//   'cartItem' name here has to match the prop name defined in the <CartItem/> component 
//   inside the checkout-page.component.jsx

//b. The 'cartItem' object is a dictionary containing the imageUrl, price, name, quantity information.. 
//   These values are destructured from the props along with the 'cartItem' object itself.
//   See above code block without using the desructuring construct... 

// const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity}}) => (
//     <div className='checkout-item'>
//         <div className='image-container'>
//             <img alt='item' src={imageUrl}/>
//         </div>
//         <span className='name'>{name}</span>
//         <span className='quantity'>{quantity}</span>
//         <span className='price'>{price}</span>

//         {/*  https://www.w3schools.com/charsets/ref_utf_dingbats.asp */}
//         <div className='remove-button'>&#10005;</div>
//     </div>
// );

//See notes above first.
//The destructuring construct above { cartItem: { name, imageUrl, price, quantity}} won't 
//give us access to the 'cartItem' object (i.e. You can't do cartItem.name or cartItem.imageUrl to reference the properties)
//We have to do it separately. And the addItem and removeItem are props provided by the mapDispatchToProps function
const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem}) => {
    //Destructure the 'cartItem' here:
    const { name, imageUrl, price, quantity } = cartItem;

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='item' src={cartItem.imageUrl}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>

            {/*  https://www.w3schools.com/charsets/ref_utf_dingbats.asp */}
            <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)), 
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})


export default connect(null, mapDispatchToProps)(CheckoutItem);