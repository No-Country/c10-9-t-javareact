import search from '../assets/images/search.png'
import caretdown from '../assets/images/CaretDown.png'
import '../styles/SearchStack.css'
function SearchStack () {
  return (
    <div className='search-container'>
      <div className='search-role'>
        <img src={search} alt={search} className='search70' />
        <input type='text' placeholder='Buscar por Rol o Puesto' className='input70' />
      </div>
      <div className='stack'>
        <h1 className='title70'>Stack</h1>
        <img src={caretdown} alt={caretdown} className='caretdown' />
      </div>
      <div className='stack'>
        <h1 className='title70'>Pais</h1>
        <img src={caretdown} alt={caretdown} className='caretdown' />
      </div>
    </div>
  )
}

export default SearchStack
