import { Component } from 'react'
import { contactService } from '../services/contact-service'
import { ContactList } from '../components/ContactList'
import { ContactDetailsPage } from './ContactDetailsPage'

export class ContactApp extends Component {
  state = {
    contacts: null,
    selectedContactId: null,
  }

  componentDidMount() {
    this.loadContacts()
  }

  loadContacts = async () => {
    const contacts = await contactService.getContacts()
    this.setState({ contacts })
  }

  onSelectContact = (contactId) => {
    this.setState({ selectedContactId: contactId })
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
            <ContactList contacts={contacts} onSelectContact={this.onSelectContact} />
          </>
        )}
      </section>
    )
  }
}
