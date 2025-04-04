import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/home/home'
import Navbar from './components/navBar/navBar'
import Footer from './components/footer/Footer'
import Verification from './pages/Verification/Verification'
import ProductVer from './components/ProductVer/ProductVer'
import Certify from './components/certify/Certify'

const App = () => {
  return (
    <div>
      <div className="app">
        <Navbar/>
        <Routes>
          <Route path='/' element={ <Home/>} />
          <Route path='/verification' element={<Verification/>}/>
          <Route path='/productver' element={<ProductVer/>}/>
          <Route path='/verify' element={<Certify/>}/>
          
        </Routes>
        <Footer />
      </div>
    </div>
  )
}

export default App