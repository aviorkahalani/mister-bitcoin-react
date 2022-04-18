import { Component } from 'react'
import { Link } from 'react-router-dom'
import { contactService } from '../services/contact-service'
import { connect } from 'react-redux'
import { setMoves, addMove } from '../store/actions/userActions'

import { TransferFund } from '../components/TransferFund'
import { MovesList } from '../components/MovesList'

class _ContactDetailsPage extends Component {
  state = {
    contact: null,
  }

  componentDidMount() {
    this.loadContact()
  }

  loadContact = async () => {
    const contact = await contactService.getContactById(this.props.match.params.id)
    this.setState({ contact }, () => {
      this.props.setMoves(this.state.contact._id)
      console.log('this.props', this.props)
    })
  }

  onAddMove = async (contact, amount) => {
    await this.props.addMove(contact, amount)
  }

  render() {
    const { contact } = this.state
    const { moves } = this.props

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

        <div className="btn-group">
          <Link className="btn btn-primary" to={`/contact/edit/${contact._id}`}>
            edit
          </Link>
          <Link to="/contact" className="btn btn-secondary btn-back">
            back
          </Link>
        </div>

        <TransferFund contact={contact} onAddMove={this.onAddMove} />
        {moves && <MovesList title="Your Moves" moves={moves} />}
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return { moves: state.userModule.moves }
}

const mapDispatchToProps = {
  setMoves,
  addMove,
}

export const ContactDetailsPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(_ContactDetailsPage)
