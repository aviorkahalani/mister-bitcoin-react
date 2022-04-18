import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { ReactNotifications } from 'react-notifications-component'
import './styles/styles.css'
import 'react-notifications-component/dist/theme.css'

import { AppHeader } from './components/AppHeader'
import { ContactApp } from './views/ContactApp'
import { AppFooter } from './components/AppFooter'
import { HomePage } from './views/HomePage'
import { StatisticPage } from './views/StatisticPage'
import { ContactDetailsPage } from './views/ContactDetailsPage'
import { ContactEdit } from './views/ContactEdit'
import { SignupPage } from './views/SignupPage'
import { userService } from './services/user-service'

const PrivateRoute = (props) => {
  const isAuth = userService.getUser()
  return isAuth ? <Route {...props} /> : <Redirect to="/signup" />
}

export default function App() {
  return (
    <Router>
      <ReactNotifications />
      <section className="app-container container flex flex-col">
        <AppHeader />
        <main className="flex-1">
          <Switch>
            <Route path="/contact/edit/:id?" component={ContactEdit} />
            <Route path="/contact/:id" component={ContactDetailsPage} />
            <PrivateRoute path="/contact" component={ContactApp} />
            <Route path="/stats" component={StatisticPage} />
            <Route path="/signup" component={SignupPage} />
            <PrivateRoute path="/" component={HomePage} />
          </Switch>
        </main>
        <AppFooter />
      </section>
    </Router>
  )
}
