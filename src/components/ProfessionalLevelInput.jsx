import React, { useState } from 'react'
import '../styles/EnglishLevelInput.css'

function ProfessionalLevelInput () {
  const [selectedOption, setSelectedOption] = useState('')

  const options = [
    { name: 'Junior', label: 'Junior' },
    { name: 'Semi Senior', label: 'Semi Senior' },
    { name: 'Senior', label: 'Senior' },
    { name: 'Full Stack', label: 'Full Stack' }
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

export default ProfessionalLevelInput
