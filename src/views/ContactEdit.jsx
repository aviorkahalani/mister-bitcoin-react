import { Component } from 'react'
import { contactService } from '../services/contact-service'

export class ContactEdit extends Component {
  state = {
    contact: null,
  }

  async componentDidMount() {
    const { id } = this.props.match.params
    const contact = id
      ? await contactService.getContactById(id)
      : contactService.getEmptyContact()
    this.setState({ contact })
  }

  handleChange = async ({ target }) => {
    const field = target.name
    const value = target.type === 'number' ? +target.value || '' : target.value
    this.setState((prevState) => ({ contact: { ...prevState.contact, [field]: value } }))
  }

  onSaveContact = async (ev) => {
    ev.preventDefault()
    await contactService.saveContact(this.state.contact)
    this.props.history.push('/contact')
  }

  onDeleteContact = async () => {
    await contactService.deleteContact(this.state.contact._id)
    this.props.history.push('/contact')
  }

  inputRef = (elInput) => {
    if (elInput) elInput.focus()
  }

  render() {
    const { contact } = this.state

    if (!contact) return <div>Loading...</div>

    return (
      <section className="contact-edit py-4">
        <div className="flex items-center justify-between">
          <h2>{contact._id ? 'Edit' : 'Add'}</h2>
          {contact._id && (
            <button className="btn btn-danger" onClick={() => this.onDeleteContact()}>
              delete contact
            </button>
          )}
        </div>
        <form onSubmit={this.onSaveContact} className="form py-2">
          <div className="form-control">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              ref={this.inputRef}
              id="name"
              type="text"
              className="form-input"
              value={contact.name}
              name="name"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="form-input"
              value={contact.email}
              name="email"
              onChange={this.handleChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              id="phone"
              type="text"
              className="form-input"
              value={contact.phone}
              name="phone"
              onChange={this.handleChange}
            />
          </div>

          <div className="btn-group">
            <button type="submit" className="btn btn-info">
              Save
            </button>
            <button
              onClick={() => this.props.history.push('/contact')}
              className="btn btn-danger-text">
              cancel
            </button>
          </div>
        </form>
      </section>
    )
  }
}
