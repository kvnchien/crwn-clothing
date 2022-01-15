import React from 'react'
import './header.styles.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg'

import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils';

import { connect } from 'react-redux';

const Header = ({currentUser}) => {
    console.log("===> Buildeing the <Header/> component...");
    return (
        <div className='header'>
            <Link className='logo-container' to="/">
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>
                    SHOP
                </Link>
                <Link className='option' to='/shop'>
                    CONTACT
                </Link>
                {/* Evaluate the 'currentUser' object passed from the App.js
                    If the 'currentUser is null, there's no user currently logged in... */}
                {
                    currentUser ?
                    <div className='option' onClickCapture={() => auth.signOut()}>LOGOUT ({currentUser.displayName})</div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
                }
            </div>
        </div>
    )
        }

//This is the standard naming with the Redux codebases. You can't use other names
//What we are getting from this function is the 'state' object which is actually a reference 
//to the Root Reducer. This is the default implemenation given to you by Redux...
const mapStateToProps = (state) => ({
    //The 'state' object here is actually the root reducer object
    currentUser: state.user.currentUser
})

//The reducx connect() funcaton accepts four different parameters, all optional. By convention, they are called:
// 1. mapStateToProps?: Function
// 2. mapDispatchToProps?: Function | Object
// 3. mergeProps?: Function
// 4. options?: Object
//
// The first parameter is reserved for mapStateToProps, the second is reserved for mapDispatchToProps, etc...
// So if the first parameter won't be used but the 2nd will be use, 'null' should be placed in the first parameter
// position to indicate that the first is ignored so the 2nd parameter will be recognized properly, as shown below
//
// See https://react-redux.js.org/api/connect
//     https://react-redux.js.org/using-react-redux/connect-mapstate
//     https://react-redux.js.org/using-react-redux/connect-mapdispatch
//     https://react-redux.js.org/using-react-redux/accessing-store

//export default Header;
//Wire the Header component with Redux
//using the higher-order component 'connect'
export default connect(mapStateToProps)(Header)