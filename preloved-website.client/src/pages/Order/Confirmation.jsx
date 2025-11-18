import Navbar from '../../components/Navbar'

export default function Confirmation() {
  return (
    <div className="page">
      <Navbar />
      <h2>Order Confirmation</h2>
      <div className="panel">
        <div>Order #: 1000123</div>
        <div>Status: Processing</div>
        <div>Items: Denim Jacket, Boots</div>
        <div>ETA: 2–3 days</div>
        <div className="actions">
          <a className="button" href="/order/1000123/tracking">Track Shipment</a>
        </div>
      </div>
    </div>
  )
}