import React, { useState } from 'react'
import '../styles/ProfessionalExperiencieInput.css'

function ProfessionalExperienceInput ({ onFormDataChange }) {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event) => {
    const { value } = event.target
    setInputValue(value)
    onFormDataChange('texto', value)
  }

  return (
    <div>
      <label htmlFor='professional-experience-input'>
        Cuéntanos tu experiencia laboral, profesional o formación. ¿Cómo la resumirías?
      </label>
      <br />
      <textarea
        className='professional-experience-input'
        placeholder='Escribe aquí tu experiencia laboral, profesional o formación'
        value={inputValue}
        onChange={handleInputChange}
        required
      />
    </div>
  )
}

export default ProfessionalExperienceInput
