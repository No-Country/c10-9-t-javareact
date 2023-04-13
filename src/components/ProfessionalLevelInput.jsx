import React, { useState } from 'react'
import '../styles/EnglishLevelInput.css'

function ProfessionalLevelInput ({ onFormDataChange }) {
  const [selectedOption, setSelectedOption] = useState('')

  const options = [
    { name: 'Junior', label: 'Junior' },
    { name: 'Semi Senior', label: 'Semi Senior' },
    { name: 'Senior', label: 'Senior' },
    { name: 'Full Stack', label: 'Full Stack' }
  ]

  const handleOptionClick = (option) => {
    setSelectedOption(option)
    onFormDataChange('level', option)
  }

  return (
    <>
      <h1>Nivel Profesional</h1>
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
        <p>por favor selecciona tu nivel profesional</p>
      )}
    </>
  )
}

export default ProfessionalLevelInput
