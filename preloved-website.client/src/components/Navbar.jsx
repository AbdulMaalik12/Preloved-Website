import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Sidebar } from 'primereact/sidebar'
import { Button } from 'primereact/button'

export default function Navbar() {
  const [open, setOpen] = useState(false)
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
        <Button className="menu-btn" icon="pi pi-bars" aria-label="Open menu" onClick={() => setOpen(true)} />
      </div>
      <Sidebar visible={open} position="right" onHide={() => setOpen(false)} aria-label="Mobile Menu">
        <div className="mobile-menu">
          <Link to="/search?type=preloved" onClick={() => setOpen(false)}>Preloved</Link>
          <Link to="/search?type=new" onClick={() => setOpen(false)}>New</Link>
          <Link to="/seller/dashboard" onClick={() => setOpen(false)}>Sell</Link>
          <Link to="/cart" onClick={() => setOpen(false)}>Cart</Link>
          <Link to="/account" onClick={() => setOpen(false)}>Account</Link>
        </div>
      </Sidebar>
    </header>
  )
}