import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import CategoryPage from './pages/CategoryPage'
import ProductPage from './pages/ProductPage'
import Products from './pages/Products'
import Page404 from './pages/Page404'

import Navigation from './components/Navigation'

export default function App() {
  return (
    <>

      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path="/products/:productID" element={<ProductPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/products/category/:CategoryName' element={<CategoryPage />} />
        <Route path='*' element={<Page404 />} />
      </Routes>

      <div className="bg-dark text-white fs-5 py-3 text-center">All Rights Reserved</div>
    </>
  )
}