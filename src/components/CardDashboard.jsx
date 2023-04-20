import React, { useState } from 'react'
import DashboardButton from '../buttons/DashboardButton'
import SearchStack from '../components/SearchStack'
import CardProject from '../components/CardProject'
import '../styles/CardDashboard.css'

function CardDashboard () {
  const [showFirstFeature, setShowFirstFeature] = useState(true)
  const [showSearchStack, setShowSearchStack] = useState(true)
  const [showCardProject, setShowCardProject] = useState(false)
  const [activeButton, setActiveButton] = useState('dashboard')

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName)
  }

  const handleClickFirstFeature = () => {
    setShowFirstFeature(true)
    handleButtonClick('dashboard')
    setShowSearchStack(true)
    setShowCardProject(false)
  }

  const handleClickSecondFeature = () => {
    setShowFirstFeature(false)
    setShowSearchStack(false)
    setShowCardProject(true)
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
      {showSearchStack && <SearchStack />}
      <p className='title58'>Colaboracion mas cerca de ti </p>
      {showCardProject && <CardProject />}
    </div>
  )
}

export default CardDashboard
