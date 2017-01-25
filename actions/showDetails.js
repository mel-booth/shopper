export const showDetails = (product) => {
  console.log('Clickity click', product.name)
  return {
    type: 'SHOW_DETAILS',
    payload: product
  }
}
