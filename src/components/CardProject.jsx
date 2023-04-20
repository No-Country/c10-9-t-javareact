import foto1 from '../assets/images/foto1.jpg'
import foto3 from '../assets/images/foto3.jpg'
import logo from '../assets/logos/BookmarkSimple.png'
import '../styles/SearchStack.css'

function CardProject () {
  return (
    <div className='card-container'>
      <div className='card'>
        <div className='content15'>
          <img src={foto1} alt='ever' className='Ever' />
          <div className='Card-information'>
            <h1 className='name15'>Sofia Perez</h1>
            <p className='subtitle15'>Backend developer</p>
            <a className='profile15'>ver perfil</a>
          </div>
          <img src={logo} alt='logo' className='BookmarkSimple' />
        </div>
        <div className='card-container2'>
          <div className='content16'>
            <h1 className='title20'>Base de Datos</h1>
            <button className='green-button'>Abierto</button>
            <p className='text20'>mi especialidad es trabajar en la implementación <br />
              y gestión de la lógica y datos de aplicaciones web <br /> y móviles
            </p>
            <h2 className='subtitle20'>Tiempo del proyecto de practica</h2>
            <div className='button-container20'>
              <button className='Orange-button'>25 dias</button>
              <button className='Purple-button'>Participar</button>
            </div>
          </div>
        </div>
      </div>
      <div className='card'>
        <div className='content15'>
          <img src={foto3} alt='ever' className='Ever' />
          <div className='Card-information'>
            <h1 className='name15'>camilo castro</h1>
            <p className='subtitle15'>Frontend developer</p>
            <a className='profile15'>ver perfil</a>
          </div>
          <img src={logo} alt='logo' className='BookmarkSimple' />
        </div>
        <div className='card-container2'>
          <div className='content16'>
            <h1 className='title20'>App moviles</h1>
            <button className='green-button'>Abierto</button>
            <p className='text20'>enfocado en el desarrollo de software, tengo <br />
              experiencia en la creación de interfaces de usuario <br />atractivas
              y efectivas para aplicaciones móviles <br /> y web
            </p>
            <h2 className='subtitle20'>Tiempo del proyecto de practica</h2>
            <div className='button-container20'>
              <button className='Orange-button'>20 dias</button>
              <button className='Purple-button'>Participar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardProject
