import React, { useState } from 'react'
import '../styles/NewPassword.css'
import { useNavigate } from 'react-router-dom'

function NewPassword () {
  const [formValues, setFormValues] = useState({
    password: '',
    newPassword: ''
  })
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate() // Get the navigate function from React Router

  function handleChange (event) {
    const { id, value } = event.target
    setFormValues({ ...formValues, [id]: value })
  }

  async function handleSubmit (event) {
    event.preventDefault()

    // Validation check
    const { password, newPassword } = formValues
    if (!password || !newPassword) {
      setErrorMessage('Please provide all required fields.')
      return
    }

    // Password matching check
    if (password !== newPassword) {
      setErrorMessage('Passwords do not match.')
      return
    }

    // Start loading
    setLoading(true)

    // Simulate backend request with setTimeout
    setTimeout(async () => {
      try {
        // Perform backend validation logic
        // ...

        // If validation passes, perform password update logic
        // ...

        // Set success message
        setSuccessMessage('Password updated successfully')

        // Redirect to login page after success
        setLoading(false)
        setTimeout(() => {
          navigate('/') // Use navigate to redirect to login page
        }, 1000) // Delay the navigation by 1 second (1000 milliseconds)
      } catch (error) {
        // Handle backend validation/error
        setErrorMessage(
          'An error occurred while updating your password. Please try again.'
        )
        setLoading(false)
      }
    }, 2000) // Simulate a 2-second backend request
  }

  return (
    <div className='NewPassword'>
      <div className='NewPassword-container'>
        <h1 className='Title'>Create a new Password</h1>
        <p className='subtitle'>Enter a new password for your account</p>
        <form onSubmit={handleSubmit} className='form'>
          <label htmlFor='password' className='label'>
            Password
          </label>
          <input
            type='password'
            id='password'
            className='input input-password'
            value={formValues.password}
            onChange={handleChange}
          />
          <label htmlFor='newPassword' className='label'>
            New Password
          </label>
          <input
            type='password'
            id='newPassword'
            className='input input-password'
            value={formValues.newPassword}
            onChange={handleChange}
          />
          <button
            type='submit'
            disabled={loading}
            className='primary-button login-button'
          >
            {loading ? 'Updating...' : 'Confirm'}
          </button>
          {errorMessage && <p>{errorMessage}</p>}
          {successMessage && <p>{successMessage}</p>}
        </form>
      </div>
    </div>
  )
}

export default NewPassword
