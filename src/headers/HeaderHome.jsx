import logo from '../assets/logos/Logo.png'
import '../styles/Header.css'
import { Link } from 'react-router-dom'

function HeaderHome () {
  return (
    <nav>
      <img src={logo} alt='logo' className='nav-logo' />
      <div className='nav-buttons-container'>
        <Link to='/' className='log-in'>iniciar sesion</Link>
        <Link to='/createaccount' className='form'>Registrarse</Link>
        <Link to='/quienessomos'>
          <button className='form1'>Quienes somos</button>
        </Link>
      </div>
    </nav>

  )
}

export default HeaderHome
