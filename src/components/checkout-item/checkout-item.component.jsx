import React from 'react';
import { connect } from 'react-redux';

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
const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity}}) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img alt='item' src={imageUrl}/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>{price}</span>

        {/*  https://www.w3schools.com/charsets/ref_utf_dingbats.asp */}
        <div className='remove-button'>&#10005;</div>
    </div>
);

const mapStateToProps = () => {

}


export default connect()(CheckoutItem);