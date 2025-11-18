import Navbar from '../../components/Navbar'
import Stepper from '../../components/Stepper'
import { Button } from 'primereact/button'

export default function Shipping() {
  return (
    <div className="page">
      <Navbar />
      <Stepper steps={["Address","Shipping","Payment","Review"]} active={1} />
      <h2>Shipping Method</h2>
      <div className="options" role="group" aria-label="Shipping options">
        <label><input type="radio" name="ship" aria-label="Economy shipping" /> Economy • ETA 5–7 days • $8</label>
        <label><input type="radio" name="ship" aria-label="Express shipping" /> Express • ETA 2–3 days • $15</label>
      </div>
      <Button label="Continue" onClick={() => location.href='/checkout/payment'} aria-label="Continue to payment" />
    </div>
  )
}