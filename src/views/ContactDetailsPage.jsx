import { Component } from 'react'
import { Link } from 'react-router-dom'
import { contactService } from '../services/contact-service'

export class ContactDetailsPage extends Component {
  state = {
    contact: null,
  }

  componentDidMount() {
    this.loadContact()
  }

  loadContact = async () => {
    const contact = await contactService.getContactById(this.props.match.params.id)
    this.setState({ contact })
  }

  render() {
    const { contact } = this.state

    if (!contact) return <div>Loading...</div>

    return (
      <section className="contact-details flex flex-col gap-3 py-4">
        <div className="contact__img">
          <img src={`https:robohash.org/${contact._id}?set=set5`} alt="" />
        </div>

        <div className="contact__info flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <img src={require('../assets/img/name.png')} alt="" />
            <p>{contact.name}</p>
          </div>
          <div className="flex gap-2 items-center">
            <img src={require('../assets/img/mail.png')} alt="" />
            <p>{contact.email}</p>
          </div>
          <div className="flex gap-2 items-center">
            <img src={require('../assets/img/phone.png')} alt="" />
            <p>{contact.phone}</p>
          </div>
        </div>

        <Link to="/contact" className="btn btn-secondary btn-back">
          back
        </Link>
      </section>
    )
  }
}
