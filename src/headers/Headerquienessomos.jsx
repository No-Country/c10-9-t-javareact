import logo from '../assets/logos/Logo.png'
import { Link } from 'react-router-dom'
function Headerquienessomos () {
  return (
    <nav>
      <Link to='/home'>
        <img src={logo} alt='logo' className='nav-logo' />
      </Link>
    </nav>
  )
}

export default Headerquienessomos
