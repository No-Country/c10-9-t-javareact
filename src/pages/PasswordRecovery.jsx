import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/PasswordRecovery.css'

function PasswordRecovery () {
  const [email, setEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false) // Add loading state
  const navigate = useNavigate() // Get the navigate function from ReactRouter

  function handleEmailChange (event) {
    setEmail(event.target.value)
  }

  async function handleSubmit (event) {
    event.preventDefault()

    // Validation check
    if (!email) {
      setErrorMessage('Please provide a valid email address to continue.')
      return
    }

    // Start loading
    setLoading(true)

    // Simulate backend request with setTimeout
    setTimeout(async () => {
      try {
        // Perform backend validation logic
        // ...

        // If validation passes, navigate to new password page
        navigate('/newpassword')
      } catch (error) {
        // Handle backend validation error
        setErrorMessage('An error occurred while validating your information. Please try again.')
      } finally {
        // Stop loading
        setLoading(false)
      }
    }, 3000) // Simulate a 2-second backend request
  }

  return (
    <div className='PasswordRecovery'>
      <div className='PasswordRecovery-container'>
        <h1 className='title1'>Password recovery</h1>
        <p className='subtitle1'>Inform the email address used to create your account</p>
        <form action='/' className='form' onSubmit={handleSubmit}>
          <label htmlFor='email' className='label'>
            Email address
          </label>
          <input
            type='email'
            id='email'
            className='input input-email'
            required
            value={email}
            onChange={handleEmailChange}
          />
          {errorMessage && <p className='error-message'>{errorMessage}</p>}
          <button
            type='submit' // Change to regular button type
            // eslint-disable-next-line no-mixed-operators
            className={`primary-button login-button ${!email || loading && 'disabled'}`} // Add 'disabled' class if email is empty or loading
            disabled={!email || loading} // Disable the button if email is empty or loading
          >
            {loading ? 'Loading...' : 'Confirm'} {/* Update button label */}
          </button>
        </form>
      </div>
    </div>
  )
}

export default PasswordRecovery
