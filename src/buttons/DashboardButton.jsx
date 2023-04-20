import React from 'react'
import '../styles/DashboardButton.css'
import logo from '../assets/logos/BookmarkSimple.png'
import ever from '../assets/images/Everrojas.jpg'

function DashboardButton () {
  return (
    <div className='card-container'>
      <div className='card'>
        <div className='content15'>
          <img src={ever} alt='ever' className='Ever' />
          <div className='Card-information'>
            <h1 className='name15'>Ever Rojas</h1>
            <p className='subtitle15'>Frontend developer</p>
            <a className='profile15'>ver perfil</a>
          </div>
          <img src={logo} alt='logo' className='BookmarkSimple' />
        </div>
        <div className='card-container2'>
          <div className='content16'>
            <h1 className='title20'>Diseño UI app</h1>
            <button className='green-button'>Abierto</button>
            <p className='text20'>Diseñar una interfaz grafica para una aplicacion, <br />
              esta aplicacion sera en su primera etapa movil <br />
              pero a futuro tambien tendra varios <br />componentes web
            </p>
            <h2 className='subtitle20'>Tiempo del proyecto de practica</h2>
            <div className='button-container20'>
              <button className='Orange-button'>1 mes</button>
              <button className='Purple-button'>Participar</button>
            </div>
          </div>
        </div>
      </div>
      <div className='card'>
        <div className='content15'>
          <img src={ever} alt='ever' className='Ever' />
          <div className='Card-information'>
            <h1 className='name15'>Ever Rojas</h1>
            <p className='subtitle15'>Frontend developer</p>
            <a className='profile15'>ver perfil</a>
          </div>
          <img src={logo} alt='logo' className='BookmarkSimple' />
        </div>
        <div className='card-container2'>
          <div className='content16'>
            <h1 className='title20'>Diseño UI app</h1>
            <button className='green-button'>Abierto</button>
            <p className='text20'>Diseñar una interfaz grafica para una aplicacion, <br />
              esta aplicacion sera en su primera etapa movil <br />
              pero a futuro tambien tendra varios <br />componentes web
            </p>
            <h2 className='subtitle20'>Tiempo del proyecto de practica</h2>
            <div className='button-container20'>
              <button className='Orange-button'>1 mes</button>
              <button className='Purple-button'>Participar</button>
            </div>
          </div>
        </div>
      </div>
      <div className='card'>
        <div className='content15'>
          <img src={ever} alt='ever' className='Ever' />
          <div className='Card-information'>
            <h1 className='name15'>Ever Rojas</h1>
            <p className='subtitle15'>Frontend developer</p>
            <a className='profile15'>ver perfil</a>
          </div>
          <img src={logo} alt='logo' className='BookmarkSimple' />
        </div>
        <div className='card-container2'>
          <div className='content16'>
            <h1 className='title20'>Diseño UI app</h1>
            <button className='green-button'>Abierto</button>
            <p className='text20'>Diseñar una interfaz grafica para una aplicacion, <br />
              esta aplicacion sera en su primera etapa movil <br />
              pero a futuro tambien tendra varios <br />componentes web
            </p>
            <h2 className='subtitle20'>Tiempo del proyecto de practica</h2>
            <div className='button-container20'>
              <button className='Orange-button'>1 mes</button>
              <button className='Purple-button'>Participar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardButton
