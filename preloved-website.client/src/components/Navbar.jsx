import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="nav" role="navigation" aria-label="Main Navigation">
      <div className="nav-inner">
        <Link to="/" className="logo" aria-label="Home">Preloved</Link>
        <input className="search" placeholder="Search products" aria-label="Search products" />
        <nav className="links" aria-label="Primary">
          <Link to="/search?type=preloved">Preloved</Link>
          <Link to="/search?type=new">New</Link>
          <Link to="/seller/dashboard">Sell</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/account">Account</Link>
        </nav>
      </div>
    </header>
  )
}