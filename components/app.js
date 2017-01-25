import React, { Component } from 'react'
import ProductList from './productList'
import ProductDetails from './productDetails'

const App = () => (
  <div>
    <h3>Products:</h3>
    <ProductList />
    <hr/>
    <ProductDetails />
  </div>
)

export default App
