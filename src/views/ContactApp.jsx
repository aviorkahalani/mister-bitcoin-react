import { Component } from 'react'
import { contactService } from '../services/contact-service'
import { ContactList } from '../components/ContactList'
import { ContactDetailsPage } from './ContactDetailsPage'
import { ContactFilter } from '../components/ContactFilter'

export class ContactApp extends Component {
  state = {
    contacts: null,
    selectedContactId: null,
    filterBy: null,
  }

  componentDidMount() {
    this.loadContacts()
  }

  loadContacts = async () => {
    const contacts = await contactService.getContacts(this.state.filterBy)
    this.setState({ contacts })
  }

  onSelectContact = (contactId) => {
    this.setState({ selectedContactId: contactId })
  }

  onChangeFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadContacts)
  }

  render() {
    const { contacts, selectedContactId } = this.state

    if (!contacts) return <div>Loading...</div>

    return (
      <section className="contact-app">
        {selectedContactId ? (
          <ContactDetailsPage
            contactId={selectedContactId}
            onBack={() => this.onSelectContact(null)}
          />
        ) : (
          <>
            <ContactFilter onChangeFilter={this.onChangeFilter} />
            <ContactList contacts={contacts} onSelectContact={this.onSelectContact} />
          </>
        )}
      </section>
    )
  }
}
