import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Test from '../Test'

const Routess = () => {
  return (
    <div>
      <Routes>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Test" element={<Test/>}/>
        <Route path="/" element={<Navigate to="/Login"/>}/>
      </Routes>
    </div>
  )
}

export default Routess