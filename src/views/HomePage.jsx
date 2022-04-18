import { Component } from 'react'
import { bitcoinService } from '../services/bitcoin-service'
import { connect } from 'react-redux'
import { loadUser } from '../store/actions/userActions'

import { MovesList } from '../components/MovesList'

class _HomePage extends Component {
  state = {
    bitcoinRate: null,
  }

  async componentDidMount() {
    await this.props.loadUser()
    this.loadBitcoinRate()
  }

  loadBitcoinRate = async () => {
    const { user } = this.props
    const bitcoinRate = await bitcoinService.getRate(user.coins)
    this.setState({ bitcoinRate })
  }

  render() {
    const { bitcoinRate } = this.state
    const { user } = this.props

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

const mapStateToProps = (state) => {
  return {
    user: state.userModule.user,
  }
}

const mapDispatchToProps = {
  loadUser,
}

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(_HomePage)
