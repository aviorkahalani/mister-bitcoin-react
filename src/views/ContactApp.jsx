import { Component } from 'react'
import { Link } from 'react-router-dom'

import { contactService } from '../services/contact-service'
import { ContactList } from '../components/ContactList'
import { ContactFilter } from '../components/ContactFilter'

export class ContactApp extends Component {
  state = {
    contacts: null,
    filterBy: null,
  }

  componentDidMount() {
    this.loadContacts()
  }

  loadContacts = async () => {
    const contacts = await contactService.getContacts(this.state.filterBy)
    this.setState({ contacts })
  }

  onChangeFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadContacts)
  }

  render() {
    const { contacts } = this.state

    if (!contacts) return <div>Loading...</div>

    return (
      <section className="contact-app ">
        <ContactFilter onChangeFilter={this.onChangeFilter} />
        <Link to="/contact/edit" className="btn btn-primary">
          add contact
        </Link>
        <ContactList contacts={contacts} />
      </section>
    )
  }
}
