import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import { Outlet } from 'react-router-dom'
import ProductSearchProvider from '../context/context'

function Layout() {
  return (
    <div>
      <ProductSearchProvider>
        <Header />
        <Outlet />
        <Footer />
      </ProductSearchProvider>
    </div>
  )
}

export default Layout
