import { combineReducers } from 'redux'
import ProductReducer from './productReducer'
import ActiveProductReducer from './activeProduct'

const allReducers = combineReducers({
  products: ProductReducer,
  activeProduct: ActiveProductReducer
})

export default allReducers
