import React, { useState } from 'react'
import DashboardButton from '../buttons/DashboardButton'
import ProjectButton from '../buttons/ProjectButton'
import SearchStack from '../components/SearchStack'
import '../styles/CardDashboard.css'

function CardDashboard () {
  const [showFirstFeature, setShowFirstFeature] = useState(true)
  const [showSecondFeature, setShowSecondFeature] = useState(false)
  const [showSearchStack, setShowSearchStack] = useState(true)
  const [activeButton, setActiveButton] = useState('dashboard')

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName)
  }

  const handleClickFirstFeature = () => {
    setShowFirstFeature(true)
    setShowSecondFeature(false)
    handleButtonClick('dashboard')
    setShowSearchStack(true)
  }

  const handleClickSecondFeature = () => {
    setShowFirstFeature(false)
    setShowSecondFeature(true)
    setShowSearchStack(false)
    handleButtonClick('project')
  }

  return (
    <div className='button-container1'>
      <button
        className={`dashboard-button ${activeButton === 'dashboard' ? 'active' : ''}`}
        onClick={handleClickFirstFeature}
      >
        Tablero
      </button>
      <button
        className={`project-button ${activeButton === 'project' ? 'active' : ''}`}
        onClick={handleClickSecondFeature}
      >
        Proyectos
      </button>
      {showFirstFeature && <DashboardButton />}
      {showSecondFeature && <ProjectButton />}
      {showSearchStack && <SearchStack />}
      <p className='title58'>Colaboracion mas cerca de ti </p>
    </div>
  )
}

export default CardDashboard
