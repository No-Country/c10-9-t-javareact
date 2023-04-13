import { useState } from 'react'

const ContactInfoInput = ({ onFormDataChange }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const handleFirstNameChange = (event) => {
    const { value } = event.target
    setFirstName(value)
    onFormDataChange('firstName', value)
  }

  const handleLastNameChange = (event) => {
    const { value } = event.target
    setLastName(value)
    onFormDataChange('lastName', value)
  }

  const handleEmailChange = (event) => {
    const { value } = event.target
    setEmail(value)
    onFormDataChange('email', value)
  }

  return (
    <>
      <div>
        <h1>Tu nombre</h1>
        <p>Usa tu nombre real </p>
        <label htmlFor='firstName'>
          <input type='text' id='firstName' name='firstName' placeholder='Introduzca su primer nombre' required value={firstName} onChange={handleFirstNameChange} />
        </label>
        <label htmlFor='lastName'>
          <input type='text' id='lastName' name='lastName' placeholder='introduzca su apellido' required value={lastName} onChange={handleLastNameChange} />
        </label>
      </div>
      <div>
        <h1> Email </h1>
        <p>Tu email
          Te enviaremos semanalmente nuevos empleos que coincidan con tus preferencias,<br />
          y podrás recibir invitaciones a empleos por parte de empresas.
        </p>
        <label htmlFor='email'>
          <input type='email' id='email' name='email' placeholder='Introduzca su correo' required value={email} onChange={handleEmailChange} />
        </label>
      </div>
    </>
  )
}

export default ContactInfoInput
