import search from '../assets/images/search.png'
import caretdown from '../assets/images/CaretDown.png'
import '../styles/SearchStack.css'
import { useState } from 'react'

function SearchStack () {
  const stackOptions = ['React', 'Angular', 'Vue', 'Node.js', 'Express', 'Django', 'Flask', 'Spring', 'Laravel', 'Ruby on Rails']
  const paisOptions = ['Argentina', 'Bolivia', 'Brazil', 'Chile', 'Colombia', 'Ecuador', 'Paraguay', 'Peru', 'Uruguay', 'Venezuela']

  const [stackModalOpen, setStackModalOpen] = useState(false)
  const [paisModalOpen, setPaisModalOpen] = useState(false)
  const [selectedStack, setSelectedStack] = useState(null)
  const [selectedPais, setSelectedPais] = useState(null)

  const toggleStackModal = () => {
    setStackModalOpen(!stackModalOpen)
  }

  const togglePaisModal = () => {
    setPaisModalOpen(!paisModalOpen)
  }

  const handleStackSelection = (option) => {
    setSelectedStack(option)
    toggleStackModal()
  }

  const handlePaisSelection = (option) => {
    setSelectedPais(option)
    togglePaisModal()
  }

  return (
    <div className='search-container'>
      <div className='search-role'>
        <img src={search} alt={search} className='search70' />
        <input type='text' placeholder='Buscar por Rol, Puesto, o Tecnología' className='input70' />
      </div>
      <div className='stack'>
        <h1 className='title70'>{selectedStack || 'Stack'}</h1>
        <img src={caretdown} alt={caretdown} className='caretdown' onClick={toggleStackModal} />
        {stackModalOpen &&
          // Render modal content for Stack options here
          <div className='modal'>
            <h2>Stack Options</h2>
            <ul>
              {stackOptions.map(option => (
                <li key={option} onClick={() => handleStackSelection(option)}>{option}</li>
              ))}
            </ul>
          </div>}
      </div>
      <div className='stack'>
        <h1 className='title70'>{selectedPais || 'País'}</h1>
        <img src={caretdown} alt={caretdown} className='caretdown' onClick={togglePaisModal} />
        {paisModalOpen &&
          // Render modal content for Pais options here
          <div className='modal'>
            <h2>País Options</h2>
            <ul>
              {paisOptions.map(option => (
                <li key={option} onClick={() => handlePaisSelection(option)}>{option}</li>
              ))}
            </ul>
          </div>}
      </div>
    </div>
  )
}

export default SearchStack
