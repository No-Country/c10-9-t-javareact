import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import CreateAccount from '../pages/CreateAccount'
import PasswordRecovery from '../pages/PasswordRecovery'
import NewPassword from '../pages/NewPassword'
import Form from '../pages/Form'
import Home from '../pages/Home'
function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/createaccount' element={<CreateAccount />} />
        <Route path='/passwordrecovery' element={<PasswordRecovery />} />
        <Route path='/newpassword' element={<NewPassword />} />
        <Route path='/form' element={<Form />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
