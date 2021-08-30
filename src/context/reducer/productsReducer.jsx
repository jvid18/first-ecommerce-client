import { productActions } from '@/context/actions/productsActions'

export const initialState = {
  isLoading: false,
  products: [],
  errorMessage: '',
}

export const productsReducer = (state, { type, payload, errorMessage }) => {
  
  const { 
    LOAD_PRODUCTS,
    LOAD_PRODUCTS_SUCCESS,
    LOAD_PRODUCTS_ERROR,
  } = productActions

  const actionsTypes = {
    [ LOAD_PRODUCTS ]: {
      ...state,
      isLoading: true,
    },
    [ LOAD_PRODUCTS_SUCCESS ]: {
      ...state,
      isLoading: false,
      products: payload,
    }
  }

  if(type in actionsTypes)
    return actionsTypes[type]
  else
    return state
}
