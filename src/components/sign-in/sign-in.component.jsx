import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils.js'
import './sign-in.styles.scss';

class SignIn extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label="email" required />
                    {/* <label> Email</label> */}
                    <FormInput name="password" type="password" value={this.state.password} label="password" handleChange={this.handleChange} required />
                    {/* <label> Password</label> */}
                    <CustomButton type="submit" value="Submit Form"> Sign in </CustomButton>
                    <CustomButton onClick={signInWithGoogle}> {' '} Sign in with Google {' '}</CustomButton>
                </form>
            </div>
        )
    }

    handleSubmit = event => {
        //Prevent the default submit action triggered by the submit button
        event.preventDefault();

        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const {value, name}  = event.target;
        //[name] is a property accessor 
        //See this: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors
        this.setState({[name]: value})
    }
}

export default SignIn;