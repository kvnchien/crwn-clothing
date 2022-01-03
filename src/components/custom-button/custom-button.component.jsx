import React from 'react';

import './custom-button.styles.scss';

//The 'isGoogleSignIn' is passed from the the Google Sign In custom button as a flag so 
//the 'google-sign-in' style will be used.. It's used as true or 'not null'
const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => (
    // <button className='custom-button' {...otherProps}>
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {/* {otherProps.type} {otherProps.value} */}
        {children}
    </button>
)

export default CustomButton;