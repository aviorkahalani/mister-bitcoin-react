import { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loadContacts, setFilterBy } from '../store/actions/contactActions'

import { ContactList } from '../components/ContactList'
import { ContactFilter } from '../components/ContactFilter'

class _ContactApp extends Component {
  state = {
    user: null,
  }

  componentDidMount() {
    this.props.loadContacts()
  }

  onChangeFilter = (filterBy) => {
    this.props.setFilterBy(filterBy)
    this.props.loadContacts()
  }

  render() {
    const { contacts } = this.props

    if (!contacts) return <div>Loading...</div>

    return (
      <section className="contact-app ">
        <ContactFilter onChangeFilter={this.onChangeFilter} />
        <Link to="/contact/edit" className="btn btn-add">
          add contact
        </Link>
        <ContactList contacts={contacts} />
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contactModule.contacts,
  }
}

const mapDispatchToProps = {
  loadContacts,
  setFilterBy,
}

export const ContactApp = connect(mapStateToProps, mapDispatchToProps)(_ContactApp)
