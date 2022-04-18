import { userService } from '../../services/user-service'

export function loadUser() {
  return async (dispatch) => {
    try {
      const user = userService.getUser()
      dispatch({ type: 'SET_USER', user })
    } catch (err) {
      console.log('%c err ', 'background: #ffa69c', err)
    }
  }
}

export function signup(username) {
  return async (dispatch) => {
    try {
      const user = await userService.signup(username)
      dispatch({ type: 'SIGN_UP', user })
    } catch (err) {
      console.log('%c err ', 'background: #ffa69c', err)
    }
  }
}

export function signout() {
  return async (dispatch) => {
    try {
      userService.signout()
      dispatch({ type: 'SIGN_OUT' })
    } catch (err) {
      console.log('%c err ', 'background: #ffa69c', err)
    }
  }
}

export function setMoves(contactId = null) {
  return async (dispatch) => {
    try {
      const moves = contactId
        ? await userService.getMovesByContact(contactId)
        : userService.getMoves()

      dispatch({ type: 'SET_MOVES', moves })
    } catch (err) {
      console.log('%c err ', 'background: #ffa69c', err)
    }
  }
}

export function addMove(contact, amount) {
  return async (dispatch) => {
    try {
      const move = await userService.addMove(contact, amount)
      dispatch({ type: 'ADD_MOVE', move })
    } catch (err) {
      console.log('%c err ', 'background: #ffa69c', err)
    }
  }
}
