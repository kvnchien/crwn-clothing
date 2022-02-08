import React from 'react';
import { connect } from 'react-redux';

import './checkout-item.styles.scss';

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