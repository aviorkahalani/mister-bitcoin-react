import { contactService } from '../../services/contact-service'

export function loadContacts() {
  return async (dispatch, getState) => {
    try {
      const { filterBy } = getState().contactModule
      const contacts = await contactService.getContacts(filterBy)
      dispatch({ type: 'SET_CONTACTS', contacts })
    } catch (err) {
      console.log('%c err ', 'background: #ffa69c', err)
    }
  }
}

export function removeContact(contactId) {
  return async (dispatch) => {
    try {
      await contactService.deleteContact(contactId)
      dispatch({ type: 'REMOVE_CONTACT', contactId })
    } catch (err) {
      console.log('%c err ', 'background: #ffa69c', err)
    }
  }
}

export function saveContact(contact) {
  return async (dispatch) => {
    try {
      const type = contact._id ? 'UPDATE_CONTACT' : 'ADD_CONTACT'
      const savedContact = await contactService.saveContact(contact)
      dispatch({ type, contact: savedContact })
    } catch (err) {
      console.log('%c err ', 'background: #ffa69c', err)
    }
  }
}

export function setFilterBy(filterBy) {
  return async (dispatch) => {
    dispatch({ type: 'SET_FILTER_BY', filterBy })
  }
}
