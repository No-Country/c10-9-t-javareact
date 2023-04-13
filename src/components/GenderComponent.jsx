import React, { useState } from 'react'
import '../styles/EnglishLevelInput.css'

function GenderComponent ({ onFormDataChange }) {
  const [selectedOption, setSelectedOption] = useState('')

  const options = [
    { name: 'Hombre', label: 'Hombre' },
    { name: 'Mujer', label: 'Mujer' },
    { name: 'prefiero no decirlo', label: 'Prefiero no decirlo' }
  ]

  const handleOptionClick = (option) => {
    setSelectedOption(option)
    onFormDataChange('gender', option)
  }

  return (
    <>
      <h1>Sexo</h1>
      <div className='button-group'>
        {options.map((option) => (
          <button
            key={option.name}
            onClick={() => handleOptionClick(option.name)}
            className={`button ${selectedOption === option.name ? 'selected' : ''}`}
            aria-label={option.label}
          >
            {option.label}
          </button>
        ))}
      </div>
      {selectedOption === '' && (
        <p>Por favor selecciona tu género</p>
      )}
    </>
  )
}

export default GenderComponent
