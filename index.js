import React from 'react'
import { render } from 'react-dom'
import redux from 'redux'

import Header from './components/header'
import Products from './components/products'
import Cart from './components/cart'


render(
  <div>
  <Header name='shopper' />
  <Products />
  <Cart />
  </div>,
  document.querySelector('main'))
console.log('welcome to shopper')
