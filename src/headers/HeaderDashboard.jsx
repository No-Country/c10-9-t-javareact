import logo from '../assets/logos/Logo.png'
import profile from '../assets/images/profile.png'
import notification from '../assets/images/notification.png'
import menu from '../assets/images/menu.png'
import '../styles/HeaderDashboard.css'
import { Link } from 'react-router-dom'
function HeaderDashboard () {
  return (
    <nav>
      <div className='navbar-left'>
        <Link to='/home'>
          <img src={logo} alt='logo' className='nav-logo' />
        </Link>
      </div>
      <div className='navbar-right'>
        <Link to='/form'>
          <img src={profile} alt='profile' />
        </Link>
        <img src={notification} alt='notification' />
        <button className='Quienes-somos'>¡quienes somos!</button>
        <img src={menu} alt='menu' className='menu' />

      </div>
    </nav>
  )
}

export default HeaderDashboard
