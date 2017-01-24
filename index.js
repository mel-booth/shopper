import React from 'react'
import { render } from 'react-dom'
import redux from 'redux'

import reducer from './reducer'
import Header from './components/header'
import Products from './components/products'
import Cart from './components/cart'

const initialState = {
  products: [
    {id: 1, name: 'Pop your Top', price: 28.00, details: 'One-handed bottle opener!'},
    {id: 2, name: 'Bolt', price: 99.00, details: 'Unlock your door with your phone!'},
    {id: 3, name: 'Bev-Brush', price: 17.00, details: 'Secret flask in a hairbrush!'},
    {id: 4, name: 'Jonny Glow', price: 32.00, details: 'See where you pee!'}
  ]
}



render (
  <div>
  <Header name='shopper' />
  <Products />
  <Cart />
  </div>,
  document.querySelector('main'))
console.log('welcome to shopper')
