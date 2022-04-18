import { Component } from 'react'
import { connect } from 'react-redux'
import { signout, signup, loadUser } from '../store/actions/userActions'

class _SignupPage extends Component {
  state = {
    username: '',
  }

  componentDidMount() {
    this.props.loadUser()
  }

  handleChange = ({ target }) => {
    const field = target.name
    const value = target.value
    this.setState({ [field]: value })
  }

  onSignup = async (ev) => {
    ev.preventDefault()
    await this.props.signup(this.state.username)
    this.props.history.push('/')
  }

  onSignout = async () => {
    this.props.signout()
  }

  render() {
    const { username } = this.state
    const { user } = this.props

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

const mapStateToProps = (state) => {
  return {
    user: state.userModule.user,
  }
}

const mapDispatchToProps = {
  loadUser,
  signup,
  signout,
}

export const SignupPage = connect(mapStateToProps, mapDispatchToProps)(_SignupPage)
