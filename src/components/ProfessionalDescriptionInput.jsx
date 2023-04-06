
import React, { useState } from 'react'

function ProfessionalDescriptionInput () {
  const [selectedJobs, setSelectedJobs] = useState([])
  const [showOptions, setShowOptions] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const jobOptions = [
    'Software Engineer',
    'Data Scientist',
    'Product Manager',
    'UI/UX Designer',
    'DevOps Engineer'
  ]

  const handleOptionClick = (option) => {
    setSelectedOption(option)
    setSelectedJobs([...selectedJobs, option])
    setShowOptions(false)
  }

  const handleRemoveJob = (job) => {
    const updatedJobs = selectedJobs.filter((j) => j !== job)
    setSelectedJobs(updatedJobs)
  }

  return (
    <div>
      <div className='dropdown'>
        <button className='dropbtn' onClick={() => setShowOptions(!showOptions)}>
          Add Job
        </button>
        {showOptions && (
          <div className='dropdown-content'>
            {jobOptions.map((option) => (
              <button key={option} onClick={() => handleOptionClick(option)}>
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className='selected-jobs'>
        {selectedJobs.map((job) => (
          <button key={job} onClick={() => handleRemoveJob(job)}>
            {job} <span className='remove'>X</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProfessionalDescriptionInput
