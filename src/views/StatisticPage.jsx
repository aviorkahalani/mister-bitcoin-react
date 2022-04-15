import { Component } from 'react'
import { bitcoinService } from '../services/bitcoin-service'

export class StatisticPage extends Component {
  state = {
    marketPrice: null,
    confirmedTransactions: null,
  }

  async componentDidMount() {
    const marketPrice = await bitcoinService.getMarketPrice()
    this.setState({ marketPrice })

    const confirmedTransactions = await bitcoinService.getConfirmedTransactions()
    this.setState({ confirmedTransactions })
  }

  render() {
    return <div>StatisticPage</div>
  }
}
