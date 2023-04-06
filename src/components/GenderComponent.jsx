import React, { useState } from 'react'
import '../styles/EnglishLevelInput.css'

function GenderComponent () {
  const [selectedOption, setSelectedOption] = useState('')

  const options = [
    { name: 'Hombre', label: 'Hombre' },
    { name: 'Mujer', label: 'Mujer' },
    { name: 'prefiero no decirlo', label: 'Prefiero no decirlo' }
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

export default GenderComponent
