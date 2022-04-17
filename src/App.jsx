import { Component } from 'react'
import './styles/styles.css'

import { AppHeader } from './components/AppHeader'
import { ContactApp } from './views/ContactApp'
import { AppFooter } from './components/AppFooter'
import { HomePage } from './views/HomePage'
import { StatisticPage } from './views/StatisticPage'

export default class App extends Component {
  state = {
    page: null,
  }

  onChangePage = (page) => {
    this.setState({ page })
  }

  render() {
    const { page } = this.state

    return (
      <section className="app-container container flex flex-col">
        <AppHeader onChangePage={this.onChangePage} />
        <main className="flex-1">
          {!page && <HomePage />}
          {page === 'contact' && <ContactApp />}
          {page === 'about' && <StatisticPage />}
        </main>
        <AppFooter />
      </section>
    )
  }
}
