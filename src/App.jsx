import './styles/styles.css'

import { AppHeader } from './components/AppHeader'
import { ContactApp } from './views/ContactApp'
import { AppFooter } from './components/AppFooter'
import { HomePage } from './views/HomePage'
import { StatisticPage } from './views/StatisticPage'

export default function App() {
  return (
    <section className="app-container container flex flex-col">
      <AppHeader />
      <main className="flex-1">
        {/* <HomePage /> */}
        {/* <ContactApp /> */}
        <StatisticPage />
      </main>
      <AppFooter />
    </section>
  )
}
