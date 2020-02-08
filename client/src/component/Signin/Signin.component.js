import React, { Component } from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component';
import NavBar from '../NavBar/NavBar';

import './signin.style.scss'

export class Signin extends Component {
    constructor (props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

    }

    handleSunmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const { value, name} = event.target;
        this.setState({[name]: value})
    }
    render() {
        return (
            <div className='signin'>
                <h2>I Already have an Account</h2>
                <span>Sign in with your email and password</span>

                <form onSubit={this.handleSubmit}>
                    <FormInput 
                     name='email'
                     type='email' 
                     value={this.state.email} 
                     handleChange = {this.handleChange}
                    required
                    label='Email'/>
                  
                    <FormInput name='password' 
                     type='password' 
                     value={this.state.password} 
                     handleChange = {this.handleChange} 
                     required
                     label='Password'/>
                

                    <CustomButton type='submit'> Sign in </CustomButton>
                    <NavBar />
                </form>
            
            
            
            </div>

        )
    }
}

export default Signin
    