import { useState } from 'react'
import Contact from '../components/ContactInfoInput'
import GenderComponent from '../components/GenderComponent'
import TechnologyListInput from '../components/TechnologyListInput'
import PhoneNumber from '../components/PhoneNumber'
import DateOfBirth from '../components/DateOfBirthInput'
import EnglishLevel from '../components/EnglishLevelInput'
import ProffesionalDescription from '../components/ProfessionalDescriptionInput'
import ProfessionalLevel from '../components/ProfessionalLevelInput'
import ProfessionalExperienceInput from '../components/ProfessionalExperienceInput'

function Form () {
  const [formData, setFormData] = useState({})
  const [formErrors, setFormErrors] = useState({})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const handleFormDataChange = (name, value) => {
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    // Validate form data
    const errors = {}
    if (!formData.gender) {
      errors.gender = 'Por favor seleccione su género.'
    }
    if (!formData.englishLevel) {
      errors.englishLevel = 'Please select an English proficiency level.'
    }
    if (!formData.selectedJobs || formData.selectedJobs.length === 0) {
      errors.selectedJobs = 'Por favor seleccione al menos un trabajo.'
    }
    if (!formData.level) {
      errors.level = 'Por favor seleccione su nivel.'
    }
    if (!formData.selectedTechnologies || formData.selectedTechnologies.length === 0) {
      errors.selectedTechnologies = 'Por favor seleccione al menos una tecnología.'
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }

    // Call API with formData
    console.log(formData)

    // Show success message and hide the form
    setIsFormSubmitted(true)
  }

  return (
    <>
      {!isFormSubmitted
        ? (
          <form onSubmit={handleSubmit}>
            <div className='form-errors'>
              {Object.keys(formErrors).map((fieldName) => (
                <p key={fieldName}>{formErrors[fieldName]}</p>
              ))}
            </div>
            <Contact onFormDataChange={handleFormDataChange} />
            <GenderComponent onFormDataChange={handleFormDataChange} />
            <PhoneNumber onFormDataChange={handleFormDataChange} />
            <DateOfBirth onFormDataChange={handleFormDataChange} />
            <EnglishLevel onFormDataChange={handleFormDataChange} />
            <ProffesionalDescription onFormDataChange={handleFormDataChange} />
            <TechnologyListInput onFormDataChange={handleFormDataChange} />
            <ProfessionalLevel onFormDataChange={handleFormDataChange} />
            <ProfessionalExperienceInput onFormDataChange={handleFormDataChange} />
            <button type='submit'>Enviar</button>
          </form>
          )
        : (
          <div>
            <p>¡Gracias! Su formulario ha sido enviado exitosamente.</p>
          </div>
          )}
    </>
  )
}

export default Form
