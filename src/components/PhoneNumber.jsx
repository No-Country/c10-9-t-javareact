import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import '../styles/PhoneNumber.css'

function PhoneNumber () {
  const [value, setValue] = useState()

  return (
    <PhoneInput
      className='custom-phone-input'
      placeholder='introduzca su numero'
      value={value}
      onChange={setValue}
    />
  )
}

export default PhoneNumber
