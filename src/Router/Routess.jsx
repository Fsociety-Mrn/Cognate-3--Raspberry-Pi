import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Test from '../Test'
import Homepage from '../Pages/Homepage'
import { useAuth } from '../Authentication/LoginFirebase'
const Routess = () => {

const status = useAuth()
  return (
    <div>
      <LoginRoutes/>
       {/*!sessionStorage.getItem('key')?  : <MainRoutes/> */ }
    </div>
  )
}

const LoginRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Test" element={<Test/>}/>
        <Route path="*" element={<Navigate to="/Login"/>}/>
      </Routes>
    </div>
  )
}

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/Homepage" element={<Homepage/>}/>
        <Route path="*" element={<Navigate to="/Homepage"/>}/>
      </Routes>
    </div>
  )
}


export default Routess