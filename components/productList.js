import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { showDetails } from '../actions/showDetails'

class ProductList extends Component {

  createProductList(){
    return this.props.products.map((product) => {
      return (
        <li key={product.id}
        onClick={() => this.props.showDetails(product)}>{product.name} ${product.price}</li>
      )
    })
  }
  render() {
    return (
      <ul>

        {this.createProductList()}

      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({showDetails:showDetails}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ProductList)
