import React from 'react'

function SelectedJobs ({ selectedJobs, onJobRemove }) {
  return (
    <>
      {selectedJobs.map((job) => (
        <button key={job} onClick={() => onJobRemove(job)}>
          {job} &times;
        </button>
      ))}
    </>
  )
}

export default SelectedJobs
