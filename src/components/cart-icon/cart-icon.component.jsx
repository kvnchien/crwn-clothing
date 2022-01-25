import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount} from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { createStructuredSelector } from 'reselect';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
);



const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

// const mapStateToProps = state => ({
//     //The following is a 'selector' implementation
//     //itemCount: state.cart.cartItems.reduce(
//     //     (accumulatedQty, cartItem) => accumulatedQty + cartItem.quantity, 0)

//     //We are using 'Reselect' as 'memoization' implemenation to
//     //avoid 'rendering' symptom. 
//     //The 'state' object is passed to the child selector, selectCartItemsCount,
//     //to be handled all the way up the the chain in the 'selectCart' selector
//     itemCount: selectCartItemsCount(state)
// })

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);