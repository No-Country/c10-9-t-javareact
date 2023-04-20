import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginSocialGoogle, LoginSocialFacebook } from 'reactjs-social-login'
import facebook from '../assets/logos/Facebook.png'
import google from '../assets/logos/Google.png'
import educfly from '../assets/logos/biggerlogo.png'
import '../styles/CreateAccount.css'

function CreateAccount () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [isCreatingAccount, setIsCreatingAccount] = useState(false)
  const navigate = useNavigate()

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => { // Use async to allow await inside the function
    e.preventDefault()

    if (name === '' || email === '' || password === '') {
      setErrorMessage('Please fill out all the fields.')
      return
    }

    setIsCreatingAccount(true)

    try {
      // Simulate account creation with a 2-second delay
      await new Promise(resolve => setTimeout(resolve, 2000))
      setIsCreatingAccount(false)

      // Navigate to / after account creation
      navigate('/')
    } catch (error) {
      setIsCreatingAccount(false)
      console.error('Error creating account:', error)
      // Update error message based on the actual error response from the API, if applicable
      setErrorMessage('Failed to create account. Please try again later.')
    }
  }

  return (
    <div className='CreateAccount'>
      <div className='CreateAccount-container'>
        <form action='/' className='form3' onSubmit={handleSubmit}>
          <h1 className='Create-account-title'>Create account</h1>
          <div className='form-div'>
            <input
              type='text'
              id='name'
              value={name}
              onChange={handleNameChange}
              placeholder='Name'
              className='input3 input-name'
              required
            />
            <input
              type='email'
              id='email'
              value={email}
              onChange={handleEmailChange}
              placeholder='email'
              className='input3 input-email'
              required
            />
            <input
              type='password'
              id='password'
              value={password}
              onChange={handlePasswordChange}
              placeholder='password'
              className='input3 input-password'
              required
            />
            {errorMessage && <p>{errorMessage}</p>}
          </div>
          <input
            type='submit'
            value={isCreatingAccount ? 'Creating...' : 'Create'}
            className='first-button5 login-button5'
            disabled={isCreatingAccount}
          />
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
        </form>

        {errorMessage && (
          <p>{errorMessage}</p>
        )}
        <img src={educfly} alt='logo' className='edufly' />
      </div>

    </div>

  )
}

export default CreateAccount
