import { Component } from 'react'
import { userService } from '../services/user-service'

export class SignupPage extends Component {
  state = {
    username: '',
    user: null,
  }

  componentDidMount() {
    this.loadUser()
  }

  loadUser = async () => {
    const user = await userService.getUser()
    this.setState({ user })
  }

  handleChange = ({ target }) => {
    const field = target.name
    const value = target.value
    this.setState({ [field]: value })
  }

  onSignup = async (ev) => {
    ev.preventDefault()
    await userService.signup(this.state.username)
    this.props.history.push('/')
  }

  onSignout = async () => {
    userService.signout()
    this.setState({ user: null })
  }

  render() {
    const { username, user } = this.state

    if (user)
      return (
        <section className="signup flex flex-col gap-2 items-center text-center py-3">
          <p>
            Hello <span className="fw-bold">{user.name}</span>
          </p>
          <button className="btn btn-warning" onClick={() => this.onSignout()}>
            Sign Out
          </button>
        </section>
      )

    return (
      <section className="signup flex flex-col gap-4 p-4">
        <img src={require('../assets/img/bitcoin.png')} alt="" />
        <form className="form flex flex-col" onSubmit={this.onSignup}>
          <div className="form-control">
            <label htmlFor="username" className="form-label">
              Please enter your username
            </label>
            <input
              onChange={this.handleChange}
              id="username"
              name="username"
              value={username}
              type="text"
              className="form-input"
            />
          </div>
          <button className="btn btn-info">Sign Up</button>
        </form>
      </section>
    )
  }
}
