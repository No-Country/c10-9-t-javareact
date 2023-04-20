import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Login.css'
// import logo from '@logos/logo_yard_sale.svg'

function Login () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

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
        {/* <img src={logo} alt='logo' className='logo' /> */}
        <form action='/' className='form' onSubmit={handleSubmit}>
          <label htmlFor='Email' className='label'>Email address</label>
          <input
            type='Text'
            name='email'
            value={email}
            onChange={handleEmailChange}
            placeholder='ever@example.com'
            className='input input-email'
            required
          />
          <label htmlFor='Password' className='label'>Password</label>
          <input
            type='Password'
            name='password'
            value={password}
            onChange={handlePasswordChange}
            placeholder='*********'
            className='input input-password'
          />
          <Link
            to='/home'
            className='log-in1 login-button1'
          >Log in
          </Link>
          {errorMessage && (
            <p className='error-message'>{errorMessage}</p> // Display error message
          )}
          <Link to='/passwordrecovery' className='forgot-password'>
            forgot my password
          </Link>
        </form>
        <Link to='/createaccount' className='secundary-button signup-button'>
          Sign up
        </Link>
      </div>
    </div>
  )
}

export default Login
