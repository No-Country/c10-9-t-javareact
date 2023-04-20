import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Login.css'
import { LoginSocialGoogle, LoginSocialFacebook } from 'reactjs-social-login'
import facebook from '../assets/logos/Facebook.png'
import google from '../assets/logos/Google.png'
import logo from '../assets/logos/biggerlogo.png'

function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault() // Prevent default form submission

    // Validate form data
    if (email === '' || password === '') {
      setErrorMessage('Please fill out all the fields.') // Set error message
      return
    }

    // Submit form data to backend or take appropriate action
    console.log('Form submitted:', email, password)
  }
  return (
    <div className='Login'>
      <div className='Login-container'>
        <img src={logo} alt='logo' className='edufly' />
        <form action='/' className='form2' onSubmit={handleSubmit}>
          <h1 className='Sign-in'>Sign in</h1>
          <input
            type='Text'
            name='email'
            value={email}
            onChange={handleEmailChange}
            placeholder='email'
            className='input1 input-email'
            required
          />
          <input
            type='Password'
            name='password'
            value={password}
            onChange={handlePasswordChange}
            placeholder='password'
            className='input1 input-password'
          />
          <Link
            to='/home'
            className='log-in1 login-button1'
          >Continue
          </Link>
          {errorMessage && (
            <p className='error-message'>{errorMessage}</p> // Display error message
          )}
          <div className='social-media'>
            <LoginSocialFacebook
              appId='753453626406808'
              onResolve={(response) => {
                console.log(response)
                navigate('/home')
              }}
              onReject={(error) => {
                console.log(error)
              }}
            >
              <img src={facebook} alt='facebook' className='facebook' />
            </LoginSocialFacebook>
            <LoginSocialGoogle
              client_id='146280076649-qqmupnisscb3pketa3646h84cdca2g54.apps.googleusercontent.com'
              discoveryDocs='claims supported'
              access_type='offline'
              onResolve={({ provider, data }) => {
                console.log(provider, data)
                navigate('/home')
              }}
              onReject={(err) => {
                console.log(err)
              }}
            >
              <img src={google} alt='google' className='google' />
            </LoginSocialGoogle>
          </div>
          <Link to='/passwordrecovery' className='forgot-password'>
            have you forgotten your password?
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Login
