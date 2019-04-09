const initialState = {
   funds: 1000000.00,
   plays: [],
   footerScores: [],
   activeFooterId: 1,
   gameInfo: ''
}

export default (state = initialState, action) => {
   switch (action.type) {
      case 'ADD_FUNDS':
         return {...state, funds: state.funds += 1000000}
      case 'FETCH_PLAYS':
         return {...state, plays: action.payload}
      case 'FETCH_FOOTER_SCORES':
         return {...state, footerScores: action.payload}
      case 'CHANGE_FOOTER_SCORE':
         return {...state, activeFooterId: action.payload}
      case 'FETCH_GAME_INFO':
         return {...state, gameInfo: action.payload}
      default:
         return state
   }
}