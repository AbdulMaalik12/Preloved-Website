import Navbar from '../../components/Navbar'
import Stepper from '../../components/Stepper'

export default function Review() {
  return (
    <div className="page">
      <Navbar />
      <Stepper steps={["Address","Shipping","Payment","Review"]} active={3} />
      <h2>Review Order</h2>
      <div className="summary">
        <div>Items: Denim Jacket, Boots</div>
        <div>Shipping: Express</div>
        <div>Total: $250</div>
      </div>
      <button className="button">Place Order</button>
    </div>
  )
}