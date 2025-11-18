import Navbar from '../../components/Navbar'
import Stepper from '../../components/Stepper'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

export default function Payment() {
  return (
    <div className="page">
      <Navbar />
      <Stepper steps={["Address","Shipping","Payment","Review"]} active={2} />
      <h2>Payment</h2>
      <form className="form" aria-label="Payment Form">
        <InputText aria-label="Card Number" placeholder="Card Number" />
        <div className="row">
          <InputText aria-label="Expiration" placeholder="MM/YY" />
          <InputText aria-label="CVC" placeholder="CVC" />
        </div>
        <Button label="Continue" onClick={() => location.href='/checkout/review'} aria-label="Continue to review" />
      </form>
    </div>
  )
}