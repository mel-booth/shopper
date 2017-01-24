import React from 'react'
import { render } from 'react-dom'
const redux = require('redux')

import reducer from './reducer'
import Header from './components/header'
import Products from './components/products'
import Cart from './components/cart'

const main = document.querySelector('main')
const app = document.createElement('div')
main.appendChild(app)

const initialState = {
  products: [
    {id: 1, name: 'Pop your Top', price: 28.00, details: 'One-handed bottle opener!'},
    {id: 2, name: 'Bolt', price: 99.00, details: 'Unlock your door with your phone!'},
    {id: 3, name: 'Bev-Brush', price: 17.00, details: 'Secret flask in a hairbrush!'},
    {id: 4, name: 'Jonny Glow', price: 32.00, details: 'See where you pee!'}
  ],
  cart: {
    1: 1 // one item with id: 1 in cart
  }
}

var store = redux.createStore()

store.subscribe()

store.dispatch()


render (
  <div>
  <Header name='shopper' />
  <Products />
  <Cart />
  </div>,
  document.querySelector('main'))
console.log('welcome to shopper')
