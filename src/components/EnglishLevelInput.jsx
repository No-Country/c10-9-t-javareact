import React, { useState } from 'react'
import '../styles/EnglishLevelInput.css'

function EnglishLevelInput ({ onFormDataChange }) {
  const [selectedOption, setSelectedOption] = useState('')

  const options = [
    { name: 'bilingue', label: 'Bilingüe' },
    { name: 'alto', label: 'Alto' },
    { name: 'promedio', label: 'Promedio' },
    { name: 'bajo', label: 'Bajo' }
  ]

  const handleOptionClick = (option) => {
    setSelectedOption(option)
    onFormDataChange('englishLevel', option)
  }

  return (
    <>
      <h1>Nivel de inglés</h1>
      <div className='button-group'>
        {options.map((option) => (
          <button
            key={option.name}
            onClick={() => handleOptionClick(option.name)}
            className={`button ${
              selectedOption === option.name ? 'selected' : ''
            }`}
            aria-label={option.label}
          >
            {option.label}
          </button>
        ))}
      </div>
      {selectedOption === '' && (
        <p>Please select an English proficiency level</p>
      )}
    </>
  )
}

export default EnglishLevelInput
