export function AppHeader() {
  return (
    <header className="main-header flex justify-between items-center">
      <h1 className="logo">
        Mister<span className="fw-bold clr-teal">Bitcoin</span>
      </h1>
      <nav className="nav flex gap-2">
        <div className="link">Home</div>
        <div className="link">Contacts</div>
        <div className="link">About</div>
      </nav>
    </header>
  )
}
