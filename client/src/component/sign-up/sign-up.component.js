import React from 'react'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';

class SignUp extends React.Component{
    constructor(){
        super();

        this.state = {
            dispalyName: '',
            email: '',
            password: '',
            confirmPassword: ''

        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        if (password != confirmPassword ) {
            alert('passwords dont match')
            return;
        }
    }

    render() {
        const {displayName, email, password, confirmPassword } = this.state;
        return(
            <div className= 'sign-up'>
            <h2>I do not have a account</h2>
            <span> Signup with your email and password</span>
            <form className='sign-up-form' onSubmit={this.handleSubmit}>
            <FormInput
            type='text'
            name='displayName'
            value={ displayName}
            onChange={this.handleChange}
            label= 'Display Name'
            required>
            </FormInput>

            <FormInput
            type='text'
            name='email'
            value={ email }
            onChange={this.handleChange}
            label= 'Email'
            required>
            </FormInput>

            <FormInput
            type='password'
            name='password'
            value={ password}
            onChange={this.handleChange}
            label= 'password'
            required>
            </FormInput>

            <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label= 'confirmPassword'
            required>
            </FormInput>
            <CustomButton type='submit'> SIGN UP</CustomButton>
            </form>

            </div>
        )
    }
}

export default SignUp