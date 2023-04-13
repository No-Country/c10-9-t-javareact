import rectangle from '../assets/images/Rectangle 10.png'
import vector6 from '../assets/images/Vector 6.png'
import vector7 from '../assets/images/Vector 7.png'
import ellipse from '../assets/images/Ellipse 1.png'
import '../styles/content.css'

function Content () {
  return (
    <div className='content'>
      <div className='title'>
        <img src={rectangle} alt='rectangle' className='icon icon-left' />
        Te incluyes?
        <img src={vector7} alt='vecto6r' className='icon icon-right' />
      </div>
      <div className='subtitle'>EducFly es un sitio para practicar
        e incentivar a los estudiantes de diferentes<br />
        plataformas conectar y poder colaborar en conjunto y
        realizar un sistema o idea<br /> digital a producction
      </div>
      <div className='buttons-container'>
        <div className='button-container'>
          <img src={vector6} alt='vector7' className='icon-left1' />
          <button className='content-button1'>Encuentra a un Compañero</button>
        </div>
        <div class='button-container'>
          <button className='content-button2'>Conviertete en Compañero</button>
          <img src={ellipse} alt='ellipse' className='icon-right1' />
        </div>
      </div>
    </div>
  )
}

export default Content
