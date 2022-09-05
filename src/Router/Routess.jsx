import React, { useState } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Login from '../Pages/Login'
import Test from '../Test'
import Homepage from '../Pages/Homepage'

const Routess = () => {
  let navigate = useNavigate(); 
  let authToken = sessionStorage.getItem('TOKEN')
  React.useEffect(()=>{
   
    if(!authToken) navigate('/Login')
  },[])
return (
    <div>
    { authToken ? <MainRoutes/> : <LoginRoutes/> }
    </div>
  )
}

const LoginRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/Login" element={<Login/>}/>
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
        <Route path="/Test" element={<Test/>}/>
        <Route path="*" element={<Navigate to="/Homepage"/>}/>
      </Routes>
    </div>
  )
}


export default Routess