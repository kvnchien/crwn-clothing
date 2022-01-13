import React from 'react'
import './header.styles.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg'

import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils';

import { connect } from 'react-redux';

const Header = ({currentUser}) => (
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
                <div className='option' onClickCapture={() => auth.signOut()}>SIGN OUT ({currentUser.displayName})</div>
                :
                <Link className='option' to='/signin'>SIGN IN</Link>
            }
        </div>
    </div>
)

//This is the stand naming with the Redux codebases. You can't use other names
const mapStateToProps = () => {

}
//export default Header;
//Wire the Header component with Redux
//using the higher-order component 'connect'
export default connect()(Header)