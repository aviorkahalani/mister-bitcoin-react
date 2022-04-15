import { Component } from 'react'
import { contactService } from '../services/contact-service'

export class ContactDetailsPage extends Component {
  state = {
    contact: null,
  }

  componentDidMount() {
    this.loadContact()
  }

  loadContact = async () => {
    const contact = await contactService.getContactById(this.props.contactId)
    this.setState({ contact })
  }

  render() {
    const { contact } = this.state
    if (!contact) return <div>Loading...</div>
    return (
      <section>
        <h1>{contact.name}</h1>
        <button onClick={() => this.props.onBack()} className="btn btn-secondary">
          {' '}
          back
        </button>
      </section>
    )
  }
}
