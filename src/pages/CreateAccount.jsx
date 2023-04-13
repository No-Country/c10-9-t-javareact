import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
        <h1 className='Title'>my account</h1>
        <form action='/' className='form' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name' className='label'>
              Name
            </label>
            <input
              type='text'
              id='name'
              value={name}
              onChange={handleNameChange}
              placeholder='Ever'
              className='input input-name'
              required
            />
            <label htmlFor='email' className='label'>
              Email
            </label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={handleEmailChange}
              placeholder='everjose@example.com'
              className='input input-email'
              required
            />
            <label htmlFor='password' className='label'>
              Password
            </label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={handlePasswordChange}
              placeholder='*********'
              className='input input-password'
              required
            />
            {errorMessage && <p>{errorMessage}</p>}
          </div>
          <input
            type='submit'
            value={isCreatingAccount ? 'Creating...' : 'Create'}
            className='first-button login-button'
            disabled={isCreatingAccount}
          />
        </form>

        {errorMessage && (
          <p>{errorMessage}</p>
        )}
      </div>

    </div>

  )
}

export default CreateAccount
