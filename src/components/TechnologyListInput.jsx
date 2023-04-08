import React, { useState } from 'react'
import TechnologySelector from '../containers/TechnologySelector'
import SelectedTechnologies from '../containers/SelectedTechnologies'

function TechnologyListInput () {
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
  }

  const handleTechRemove = (tech) => {
    setSelectedTechnologies(selectedTechnologies.filter((selectedTech) => selectedTech !== tech))
    setAvailableTech([...availableTech, tech])
  }

  return (
    <div>
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
