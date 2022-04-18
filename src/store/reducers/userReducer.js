const INITIAL_STATE = {
  user: null,
  bitcoinRate: null,
  moves: null,
}

export function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.user }

    case 'SIGN_UP':
      return { ...state, user: action.user }

    case 'SIGN_OUT':
      return { ...state, user: null }

    case 'SET_MOVES':
      return { ...state, moves: action.moves }

    case 'ADD_MOVE':
      return { ...state, moves: [...state.moves, action.move] }

    default:
      return state
  }
}
