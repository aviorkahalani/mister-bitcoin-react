import { Component } from 'react'
import { userService } from '../services/user-service'
import { bitcoinService } from '../services/bitcoin-service'

export class HomePage extends Component {
  state = {
    user: null,
    bitcoinRate: null,
  }

  componentDidMount() {
    this.loadUser()
  }

  loadUser = async () => {
    const user = await userService.getUser()
    this.setState({ user }, () => {
      this.loadBitcoinRate()
    })
  }

  loadBitcoinRate = async () => {
    const { user } = this.state
    const bitcoinRate = await bitcoinService.getRate(user.coins)
    this.setState({ bitcoinRate })
  }

  render() {
    const { user, bitcoinRate } = this.state

    if (!user) return <div>Loading...</div>

    return (
      <div>
        <h1>HOMEPAGE</h1>
        <pre>{JSON.stringify(user, null, 2)}</pre>
        <h2>{bitcoinRate}</h2>
      </div>
    )
  }
}
