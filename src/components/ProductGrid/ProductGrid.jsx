import React, { useContext } from 'react'
import {Spinner} from 'react-bootstrap'

import { ProductContext } from '@/context/providers/ProductsContext'
import ProductCard from '@/components/ProductCard/ProductCard'

import './productGrid.css'

const ProductGrid = () => {
  const { isLoading, products } = useContext(ProductContext)

  if(isLoading)
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    )

  return (
    <div className="products-grid">
      {
        products.map(product => <ProductCard key={ product._id } { ...product } />)
      }
    </div>
  )
}
export default ProductGrid
