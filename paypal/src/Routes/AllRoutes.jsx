import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Signup from '../Pages/Register'
import Homepage from '../Pages/Homepage'
import Task from '../Pages/Task'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/task" element={<Task />} />
      
    </Routes>
  )
}

export default AllRoutes