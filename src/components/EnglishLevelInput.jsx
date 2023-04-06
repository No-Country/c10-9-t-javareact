import React, { useState } from 'react'
import '../styles/EnglishLevelInput.css'

function EnglishLevelInput () {
  const [selectedOption, setSelectedOption] = useState('')

  const options = [
    { name: 'bilingue', label: 'Bilingüe' },
    { name: 'alto', label: 'Alto' },
    { name: 'promedio', label: 'Promedio' },
    { name: 'bajo', label: 'Bajo' }
  ]

  const handleOptionClick = (option) => {
    setSelectedOption(option)
  }

  return (
    <>
      <h1>Nivel de ingles</h1>
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
    </>
  )
}

export default EnglishLevelInput
