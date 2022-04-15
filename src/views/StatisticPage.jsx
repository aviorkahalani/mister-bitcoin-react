import { Component } from 'react'
import { LineChart } from '../components/charts/LineChart'
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
    const { marketPrice, confirmedTransactions } = this.state

    return (
      <div>
        <section>{marketPrice && <LineChart data={marketPrice} />}</section>
        <section>
          {confirmedTransactions && <LineChart data={confirmedTransactions} />}
        </section>
      </div>
    )
  }
}
