import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {
            cartItems.map(cartItem => ( <CartItem key={cartItem.id} item={cartItem} />
        ))}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

//To allow this commponent to get to the state object...
//Remember, the "cart" in the state.cart.cartItems needs to match with the property name defined in the root reducer
// const mapStateToProps = (state) => ({
//     //cartItems: state.cart.cartItems
//     cartItems: selectCartItems(state)
// })

//The 'createStructuredSelector' funcation to pass the 'state' object implicitly
const mapStateToProps = createStructuredSelector ({
    //cartItems: state.cart.cartItems
    cartItems: selectCartItems
})

// const mapStateToProps = ({ cart: {cartItems} }) => ({
//     cartItems
// })


export default connect(mapStateToProps)(CartDropdown);