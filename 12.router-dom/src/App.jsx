import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import NotFound from './pages/NotFound'
import Header from './component/Header'
import EmployeeAbout from './pages/EmployeeAbout'
import CompanyAbout from './pages/CompanyAbout'
import ProducDetails from './pages/ProducDetails'


function App() {

  //Routes Route olucak 
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/about' element={<About />} >
          <Route path='employee' element={<EmployeeAbout />} />
          <Route path='company' element={<CompanyAbout />} />
        </Route>
        <Route path='/contact' element={<Contact />} />

        <Route path='/products' element={<Products />} />
        <Route path='/product-details/:id' element={<ProducDetails />} />
        <Route path='*' element={<NotFound />} ></Route>


      </Routes>
    </div>
  )
}

export default App
