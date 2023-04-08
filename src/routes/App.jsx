import React from 'react'
import Contact from '../components/ContactInfoInput'
import GenderComponent from '../components/GenderComponent'
import TechnologyListInput from '../components/TechnologyListInput'
import PhoneNumber from '../components/PhoneNumber'
import DateOfBirth from '../components/DateOfBirthInput'
import EnglishLevel from '../components/EnglishLevelInput'
import ProffesionalDescription from '../components/ProfessionalDescriptionInput'
import ProfessionalLevel from '../components/ProfessionalLevelInput'
function App () {
  return (
    <>
      <GenderComponent />
      <Contact />
      <PhoneNumber />
      <DateOfBirth />
      <EnglishLevel />
      <ProffesionalDescription />
      <TechnologyListInput />
      <ProfessionalLevel />

    </>
  )
}

export default App
