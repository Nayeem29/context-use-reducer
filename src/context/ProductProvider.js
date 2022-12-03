import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { actionTypes } from '../State/productState/actionTypes';

import { productReducer, initialState } from '../State/productState/productReducer';
const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {

  const [data, setData] = useState([]);

  const [state, dispatch] = useReducer(productReducer, initialState);

  console.log(state);


  useEffect(() => {
    dispatch({ type: actionTypes.FETCHING_START })
    fetch('products.json')
      .then(res => res.json())
      .then(product => dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: product }))
      .catch(() => dispatch({ type: actionTypes.FETCHING_ERROR }))
  }, []);

  const value = {
    state, dispatch
  }
  return (
    <PRODUCT_CONTEXT.Provider value={value}>
      {children}
    </PRODUCT_CONTEXT.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(PRODUCT_CONTEXT);
  return context;
}

export default ProductProvider;