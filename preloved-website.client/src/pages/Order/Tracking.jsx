import Navbar from '../../components/Navbar'

export default function Tracking() {
  return (
    <div className="page">
      <Navbar />
      <h2>Shipment Tracking</h2>
      <div className="panel">
        <div>Carrier: FASTEX</div>
        <div>Tracking: FX123456789</div>
        <div className="timeline">
          <div>Label Created</div>
          <div>Picked Up</div>
          <div>In Transit</div>
          <div>Out for Delivery</div>
          <div>Delivered</div>
        </div>
      </div>
    </div>
  )
}