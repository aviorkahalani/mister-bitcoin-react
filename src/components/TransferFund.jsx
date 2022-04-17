import { Component } from 'react'
import { userService } from '../services/user-service'

export class TransferFund extends Component {
  state = {
    amount: '',
  }

  handleChange = async ({ target }) => {
    const field = target.name
    const value = target.type === 'number' ? +target.value || '' : target.value
    this.setState({ [field]: value })
  }

  onFormSubmit = (ev) => {
    ev.preventDefault()
    const { amount } = this.state
    const { contact } = this.props
    userService.addMove(contact, amount)
  }

  render() {
    const { amount } = this.state

    return (
      <form className="form" onSubmit={this.onFormSubmit}>
        <div className="form-control">
          <label htmlFor="amount" className="form-label">
            Transfer coins to{' '}
            <span className="fw-bold clr-teal">{this.props.contact.name}</span>
          </label>
          <input
            id="amount"
            name="amount"
            value={amount}
            onChange={this.handleChange}
            type="number"
            className="form-input"
            min="0"
          />
        </div>
        <button type="submit" className="btn btn-success">
          transfer
        </button>
      </form>
    )
  }
}
