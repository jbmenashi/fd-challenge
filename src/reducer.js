const initialState = {
   plays: [],
   footerScores: [],
   activeFooterId: 1,
   gameInfo: '',
   awayFG: '',
   awayFT: '',
   away3P: '',
   homeFG: '',
   homeFT: '',
   home3P: ''
}

export default (state = initialState, action) => {
   switch (action.type) {
      case 'FETCH_PLAYS':
         return {...state, plays: action.payload}
      case 'FETCH_FOOTER_SCORES':
         return {...state, footerScores: action.payload}
      case 'CHANGE_FOOTER_SCORE':
         return {...state, activeFooterId: action.payload}
      case 'FETCH_GAME_INFO':
         return {...state, gameInfo: action.payload}
      case 'FETCH_AWAY_FG':
         return {...state, awayFG: action.payload}
      case 'FETCH_AWAY_FT':
         return {...state, awayFT: action.payload}
      case 'FETCH_AWAY_3P':
         return {...state, away3P: action.payload}
      case 'FETCH_HOME_FG':
         return {...state, homeFG: action.payload}
      case 'FETCH_HOME_FT':
         return {...state, homeFT: action.payload}
      case 'FETCH_HOME_3P':
         return {...state, home3P: action.payload}
      default:
         return state
   }
}