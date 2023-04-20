import React, { useState } from 'react'

function JobSelector ({ showModal, availableJobs, onModalOpen, onModalClose, onJobSelect, errorMessage }) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredJob = availableJobs.filter((job) => {
    return job.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <>
      {availableJobs.length > 0 && (
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
              <input type='text' value={searchTerm} onChange={handleSearchChange} placeholder='Search job' />
            </div>
            {filteredJob.length > 0
              ? (
                <ul>
                  {filteredJob.map((job) => (
                    <li key={job} onClick={() => onJobSelect(job)}>
                      {job}
                    </li>
                  ))}
                </ul>
                )
              : (
                <p>no matching job found</p>
                )}
            {errorMessage && <p className='error'>{errorMessage}</p>}
          </div>
        </div>
      )}
    </>
  )
}

export default JobSelector
