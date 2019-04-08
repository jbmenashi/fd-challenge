const initialState = {
   funds: 1000000.00
}

export default (state = initialState, action) => {
   switch (action.type) {
      case 'ADD_FUNDS':
         return {...state, funds: state.funds += 1000000}
      default:
         return state
   }
}