import './styles/styles.css'

import { AppHeader } from './components/AppHeader'
import { ContactApp } from './views/ContactApp'

export default function App() {
  return (
    <section className="app container">
      <AppHeader />
      <ContactApp />
    </section>
  )
}
