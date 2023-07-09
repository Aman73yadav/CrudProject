import React from 'react'
import Homecrud from './Component/Homecrud'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Createuser from './Component/Createuser'
import Users from './Component/Users'
import Editusers from './Component/Edituser'

const App = () => {
  return (
    <div>

      <BrowserRouter>
      <Homecrud/>
      <Routes>

        <Route element={<Createuser/>} path='/' />
        <Route element={<Users/>} path='/users' />
        <Route element={<Editusers/>} path="/edit/:index" />

      </Routes>            
      </BrowserRouter>    
            
      
    </div>
  )
}

export default App
