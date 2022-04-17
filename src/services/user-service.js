import { utilService } from './util-service'

export const userService = {
  getUser,
  signup,
  signout,
  addMove,
  getMoves,
  getMovesByContact,
}

async function getUser() {
  return utilService.loadFromStorage('user')
}

async function signup(username) {
  const user = {
    name: username,
    coins: 100,
    moves: [],
  }
  utilService.saveToStorage('user', user)
  return user
}

function signout() {
  localStorage.removeItem('user')
}

async function addMove(contact, amount) {
  const user = await getUser()
  if (amount > user.coins) {
    throw new Error('You can not transfer more than what you have.')
  }

  const move = {
    _id: utilService.makeId(),
    toId: contact._id,
    to: contact.name,
    from: user.name,
    at: new Date(),
    amount,
  }

  user.coins -= amount
  user.moves.unshift(move)

  utilService.saveToStorage('user', user)
}

async function getMoves() {
  const user = await getUser()
  return user.moves
}

async function getMovesByContact(contactId) {
  const user = await getUser()
  return user.moves.filter((move) => move.toId === contactId)
}
