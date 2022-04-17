import { withRouter, NavLink } from 'react-router-dom'

function _AppHeader() {
  return (
    <header className="main-header flex justify-between items-center">
      <h1 className="logo">
        Mister<span className="fw-bold clr-teal">Bitcoin</span>
      </h1>
      <nav className="nav flex gap-2">
        <NavLink className="link" activeClassName="active" exact to="/">
          Home
        </NavLink>
        <NavLink className="link" activeClassName="active" exact to="/contact">
          Contact
        </NavLink>
        <NavLink className="link" activeClassName="active" exact to="/stats">
          Stats
        </NavLink>
      </nav>
    </header>
  )
}

export const AppHeader = withRouter(_AppHeader)
