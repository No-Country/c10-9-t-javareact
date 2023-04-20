import React from 'react'

function SelectedTechnologies ({ selectedTechnologies, onTechRemove }) {
  return (
    <>
      {selectedTechnologies.map((tech) => (
        <button key={tech} onClick={() => onTechRemove(tech)}>
          {tech} &times;
        </button>
      ))}
    </>
  )
}

export default SelectedTechnologies
