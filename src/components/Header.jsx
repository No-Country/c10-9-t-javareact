import logo from '../assets/logos/Logo.png'
import '../styles/Header.css'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <nav>
      <img src={logo} alt='logo' className='nav-logo' />
      <div className='nav-buttons-container'>
        <Link to='/' className='log-in'>iniciar sesion</Link>
        <Link to='/form' className='form'>Registrarse</Link>
        <button className='form1'>Hablemos</button>
      </div>
    </nav>

  )
}

export default Header
