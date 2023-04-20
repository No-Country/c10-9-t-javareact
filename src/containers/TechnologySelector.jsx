import React, { useState } from 'react'

function TechnologySelector ({ showModal, availableTech, onModalOpen, onModalClose, onTechSelect, errorMessage }) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredTech = availableTech.filter((tech) => {
    return tech.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <>
      {availableTech.length > 0 && (
        <button onClick={onModalOpen}>+</button>
      )}
      {showModal && (
        <div className='modal-wrapper'>
          <div className='modal-backdrop' onClick={onModalClose}> </div>
          <div className='modal-content'>
            <button className='modal-close' onClick={onModalClose}>
              X
            </button>
            <h2>Choose a tech job:</h2>
            <div>
              <input type='text' value={searchTerm} onChange={handleSearchChange} placeholder='Search technology' />
            </div>
            {filteredTech.length > 0
              ? (
                <ul>
                  {filteredTech.map((tech) => (
                    <li key={tech} onClick={() => onTechSelect(tech)}>
                      {tech}
                    </li>
                  ))}
                </ul>
                )
              : (
                <p>No matching technologies found</p>
                )}
            {errorMessage && <p className='error'>{errorMessage}</p>}
          </div>
        </div>
      )}
    </>
  )
}

export default TechnologySelector
