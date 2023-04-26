import React, { useEffect } from 'react'
import {Route, Routes } from 'react-router-dom'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import { total } from './Redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import ProductDetail from './pages/ProductDetail'

function App() {
  const dispatch = useDispatch()
  const {cartItems} = useSelector((state)=>state.cart)
  useEffect(()=>{
    dispatch(total())
  },[cartItems])
  return (
    <div>
    
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/ProductDetail/:id' element={<ProductDetail/>}/>
     </Routes>
    </div>
  )
}

export default App