import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProductDetails extends Component {
  render() {
    return (
      <div>
        <img src={this.props.product.img} />
        <h4>{this.props.product.name}</h4>
        <h4>{this.props.product.price}</h4>
        <p>{this.props.product.details}</p>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    product: state.activeProduct
  }
}

export default connect(mapStateToProps)(ProductDetails)
