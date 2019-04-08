const initialState = {
   funds: 1000000.00,
   plays: []
}

export default (state = initialState, action) => {
   switch (action.type) {
      case 'ADD_FUNDS':
         return {...state, funds: state.funds += 1000000}
      case 'FETCH_PLAYS':
         return {...state, plays: action.payload}
      default:
         return state
   }
}