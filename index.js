import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import allReducers from './reducers/reducer'
import App from './components/app'
// import Products from './components/products'
// import Cart from './components/cart'

const store = createStore(allReducers)

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app'))

  store.dispatch({type: 'INIT'})
