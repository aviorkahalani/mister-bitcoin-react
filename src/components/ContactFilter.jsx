import { Component } from 'react'

export class ContactFilter extends Component {
  state = {
    term: '',
  }

  handleChange = ({ target }) => {
    const field = target.name
    const value = target.type === 'number' ? +target.value || '' : target.value
    this.setState({ [field]: value }, () => {
      this.props.onChangeFilter(this.state)
    })
  }

  render() {
    const { term } = this.state

    return (
      <section className="py-3">
        <label htmlFor="term" className="form-label">
          Free Search
        </label>
        <input
          onChange={this.handleChange}
          id="term"
          type="text"
          name="term"
          className="form-input"
          value={term}
          autoComplete="off"
        />
      </section>
    )
  }
}
