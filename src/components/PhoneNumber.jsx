import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import '../styles/PhoneNumber.css'

function PhoneNumber ({ onFormDataChange }) {
  const [value, setValue] = useState()

  const handlePhoneChange = (phoneValue) => {
    setValue(phoneValue)
    onFormDataChange('phoneNumber', phoneValue)
  }

  return (
    <>
      <h1>Numero de telefono movil</h1>
      <PhoneInput
        className='custom-phone-input'
        placeholder='introduzca su numero'
        value={value}
        onChange={handlePhoneChange}
        required
      />
    </>
  )
}

export default PhoneNumber
