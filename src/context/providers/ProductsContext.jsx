import React, { createContext, useEffect, useReducer } from 'react'
import { getProducts } from '@/api/productApi'
import { productsReducer, initialState } from '@/context/reducer/productsReducer'
import { productActions } from '@/context/actions/productsActions'

export const ProductContext = createContext(initialState)

export const ProductProvider = ({ children }) => {

  const [state, dispatch] = useReducer(productsReducer, initialState)

  const { 
    LOAD_PRODUCTS,
    LOAD_PRODUCTS_SUCCESS,
    LOAD_PRODUCTS_ERROR,
  } = productActions

  const loadProducts = async () => {
    dispatch({
      type: LOAD_PRODUCTS,
    })

    const { data } = await getProducts()

    if(data)
      dispatch({
        type: LOAD_PRODUCTS_SUCCESS,
        payload: data,
      })
    else
      dispatch({
        type: LOAD_PRODUCTS_ERROR,
        errorMessage: '',
      })
  }
  
  useEffect(() => {
    loadProducts()
  }, [])

  return (
    <ProductContext.Provider value={{ ...state }}>
      { children }
    </ProductContext.Provider>
  )
}
