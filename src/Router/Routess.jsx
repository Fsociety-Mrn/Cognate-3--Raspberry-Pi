import React from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Test from '../Test'
import Homepage from '../Pages/Homepage'
import AccountSettings from '../Pages/AccountSettings'
import { DesktopAppBar}  from '../Components/Appbar'




const Routess = () => {
  let authToken = sessionStorage.getItem('TOKEN')
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
  const AppBar = () => {
    return (
      <div>
        <DesktopAppBar/>
        <Outlet/>
      </div>
    )
  }
  return (
    <div>
      <Routes>
      <Route element={
        <AppBar/>
      }>
        <Route path="/Homepage" element={<Homepage/>}/>
        <Route path="/AccountSettings" element={<AccountSettings/>}/>
        <Route path="/Test" element={<Test/>}/>
        <Route path="*" element={<Navigate to="/Homepage"/>}/>
        </Route>
      </Routes>
    </div>
  )
}


export default Routess