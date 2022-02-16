import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { withRouter } from 'react-router-dom';

import './cart-dropdown.styles.scss';

//The "...otherProps" here captures all other props made available by React or Redux.
//In this case, the 'dispatch' is passed to this component automatically/implicitly. 
//See the 'Note' section at the bottom.
const CartDropdown = ({cartItems, history, ...otherProps}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
        {
            cartItems.length ?
            cartItems.map(cartItem => ( <CartItem key={cartItem.id} cartItem={cartItem} />
        ))
            :
            <span className='empty-message'>Your cart is empty</span>    
        }
        </div>
        <CustomButton onClick={() => {
                history.push('./checkout');
                otherProps.dispatch(toggleCartHidden());
            }    
        }>GO TO CHECKOUT</CustomButton>
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

//The "withRouter" is not longer valid in react-reouter-dom 6.x. Use hook
//The "withRouter" will return the same MeunItem component and add the 'props' coming 
//from the <Route></Route>. So the "history, linkUrl, match" props are passed
//to the MenuItem by the "withRouter" function.. 
//
//See ./components/menu-item/menu-item.component.jsx for what props are made available 
//with the 'withRouter' function
export default withRouter(connect(mapStateToProps)(CartDropdown));

//********** READ THIS **********
//Important note: the Reduct 'connect' function actually passes the 'dispatch' as a prop
//into the component if the second callback funcation, mapDispatchToProps, is not specified 
//in the 2nd parameter of the connect()..... 