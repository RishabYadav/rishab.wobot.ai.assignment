import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Navbar from './components/Navbar'
import Pagenotfound from "./pages/Pagenotfound"



export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='*' element={<Pagenotfound />} /> 


        </Routes>
      </BrowserRouter>
    </div>
  )
}
