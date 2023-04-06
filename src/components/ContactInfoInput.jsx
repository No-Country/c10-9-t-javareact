import React from 'react'

function ContactInfoInput () {
  return (
    <>
      <div>
        <h1>Tu nombre</h1>
        <p>Usa tu nombre real </p>
        <label htmlFor='firstName'>
          <input type='text' id='firstName' name='firstName' placeholder='Introduzca su primer nombre' required />
        </label>
        <label htmlFor='lastName'>
          <input type='text' id='lastName' name='lastName' placeholder='introduzca su apellido' required />
        </label>
      </div>
      <div>
        <h1> Email </h1>
        <p>Tu email
          Te enviaremos semanalmente nuevos empleos que coincidan con tus preferencias,<br />
          y podrás recibir invitaciones a empleos por parte de empresas.
        </p>
        <label htmlFor='email'>
          <input type='email' id='email' name='email' placeholder='Introduzca su correo' required />
        </label>
      </div>
    </>
  )
}

export default ContactInfoInput
