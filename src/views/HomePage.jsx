import { Component } from 'react'
import { userService } from '../services/user-service'
import { bitcoinService } from '../services/bitcoin-service'

import { MovesList } from '../components/MovesList'

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
    if (!user) this.props.history.push('/signup')

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
      <section className="home py-4 flex flex-col gap-3">
        <main className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <img src={require('../assets/img/profile.png')} alt="" />
            <p>
              Hello <span className="fw-bold">{user.name}</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <img src={require('../assets/img/dollar.png')} alt="" />
            <p>Coins: {user.coins}</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={require('../assets/img/bitcoin.png')} alt="" />
            <p>BTC: {bitcoinRate}</p>
          </div>
        </main>

        <MovesList title="Your Last Moves" moves={user.moves.slice(0, 3)} />
      </section>
    )
  }
}
