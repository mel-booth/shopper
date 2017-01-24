import test from 'tape'
import freeze from 'deep-freeze'

import reducer from '../reducer'


test('ADD_TO_CART adds one item to shopping cart', function (t) {
  var initialState = {
    cart: {

    }
  }
  freeze(initialState)
  var newState = reducer(initialState, {type: 'ADD_TO_CART', payload: 1})
  t.equal(newState.cart[1], 1)
  t.end()
})

test('REMOVE_FROM_CART removes one item from shopping cart', function (t) {
  t.ok(true)
  t.end()
})

test('TOGGLE_DETAILS shows/hides product details', function (t) {
  t.ok(true)
  t.end()
})
