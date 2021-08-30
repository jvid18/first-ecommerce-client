import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ProductProvider } from './context/providers/ProductsContext'

import HomePage from './pages/home/HomePage'
import CustomNavbar from '@/components/ui/Navbar'
import ProductForm from './pages/products/ProductForm'

import './App.css'

function App() {
  return (
    <Router>
      <CustomNavbar />
      <div className="container">
        <ProductProvider>
          <Switch>
            <Route path="/" exact  component={ HomePage } />
            <Route path="/products/new" component={ ProductForm } />
          </Switch>
        </ProductProvider>
      </div>
    </Router>
  )
}

export default App
