import React, { useState } from 'react'
import TechnologySelector from '../containers/TechnologySelector'
import SelectedTechnologies from '../containers/SelectedTechnologies'

function TechnologyListInput ({ onFormDataChange }) {
  const [showModal, setShowModal] = useState(false)
  const [selectedTechnologies, setSelectedTechnologies] = useState([])
  const [availableTech, setAvailableTech] = useState([
    'React',
    'Javascript',
    'Figma',
    'Python'
  ])
  const [errorMessage, setErrorMessage] = useState(null)

  const handleModalOpen = () => {
    setShowModal(true)
  }

  const handleModalClose = () => {
    setShowModal(false)
  }

  const handleTechSelect = (tech) => {
    if (selectedTechnologies.includes(tech)) {
      setErrorMessage(`You've already selected ${tech}`)
      return
    }
    setSelectedTechnologies([...selectedTechnologies, tech])
    setAvailableTech(availableTech.filter((availableTech) => availableTech !== tech))
    setShowModal(false)
    onFormDataChange('selectedTechnologies', [...selectedTechnologies, tech])
    setErrorMessage(null)
  }

  const handleTechRemove = (tech) => {
    setSelectedTechnologies(selectedTechnologies.filter((selectedTech) => selectedTech !== tech))
    setAvailableTech([...availableTech, tech])
    onFormDataChange('selectedTechnologies', selectedTechnologies.filter((selectedTech) => selectedTech !== tech))
  }

  return (
    <div>
      <h1>Sofware y tecnologia que usas</h1>
      <TechnologySelector
        showModal={showModal}
        availableTech={availableTech}
        onModalOpen={handleModalOpen}
        onModalClose={handleModalClose}
        onTechSelect={handleTechSelect}
        errorMessage={errorMessage}
      />
      <SelectedTechnologies selectedTechnologies={selectedTechnologies} onTechRemove={handleTechRemove} />
    </div>
  )
}

export default TechnologyListInput
