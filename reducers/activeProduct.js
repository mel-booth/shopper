export default function (state={}, action) {
  switch(action.type) {
    case 'SHOW_DETAILS':
      return action.payload
      break
  }
  return state
}
