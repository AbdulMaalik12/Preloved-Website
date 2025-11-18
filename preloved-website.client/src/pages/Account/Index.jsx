import Navbar from '../../components/Navbar'

export default function Account() {
  return (
    <div className="page">
      <Navbar />
      <div className="account">
        <aside className="sidebar">
          <a href="#">Orders</a>
          <a href="#">Addresses</a>
          <a href="#">Payments</a>
          <a href="#">Saved Items</a>
          <a href="#">Settings</a>
        </aside>
        <main className="panel">
          <h2>Account Dashboard</h2>
          <div className="tile">Recent Orders</div>
          <div className="tile">Saved Items</div>
        </main>
      </div>
    </div>
  )
}