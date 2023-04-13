import React, { useState } from 'react'
import JobSelector from '../containers/JobSelector'
import SelectedJobs from '../containers/SelectedJobs'

function ProfessionalDescriptionInput ({ onFormDataChange }) {
  const [showModal, setShowModal] = useState(false)
  const [selectedJobs, setSelectedJobs] = useState([])
  const [availableJobs, setAvailableJobs] = useState([
    'Software Developer',
    'Data Analyst',
    'Web Designer',
    'Network Administrator'
  ])
  const [errorMessage, setErrorMessage] = useState(null)

  const handleModalOpen = () => {
    setShowModal(true)
  }

  const handleModalClose = () => {
    setShowModal(false)
  }

  const handleJobSelect = (job) => {
    if (selectedJobs.includes(job)) {
      setErrorMessage(`You've already selected ${job}`)
      return
    }
    setSelectedJobs([...selectedJobs, job])
    setAvailableJobs(availableJobs.filter((availableJob) => availableJob !== job))
    setShowModal(false)
    onFormDataChange('selectedJobs', [...selectedJobs, job])
    setErrorMessage(null)
  }

  const handleJobRemove = (job) => {
    setSelectedJobs(selectedJobs.filter((selectedJob) => selectedJob !== job))
    setAvailableJobs([...availableJobs, job])
    onFormDataChange('selectedJobs', selectedJobs.filter((selectedJob) => selectedJob !== job))
  }

  return (
    <div>
      <h1>Descripcion profesional</h1>
      <JobSelector
        showModal={showModal}
        availableJobs={availableJobs}
        onModalOpen={handleModalOpen}
        onModalClose={handleModalClose}
        onJobSelect={handleJobSelect}
        errorMessage={errorMessage}
      />
      <SelectedJobs selectedJobs={selectedJobs} onJobRemove={handleJobRemove} />
    </div>
  )
}

export default ProfessionalDescriptionInput
