import Navbar from '../../components/Navbar'
import Stepper from '../../components/Stepper'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

export default function Address() {
  return (
    <div className="page">
      <Navbar />
      <Stepper steps={["Address","Shipping","Payment","Review"]} active={0} />
      <h2>Shipping Address</h2>
      <form className="form" aria-label="Shipping Address">
        <InputText aria-label="Full Name" placeholder="Full Name" />
        <InputText aria-label="Street" placeholder="Street" />
        <InputText aria-label="City" placeholder="City" />
        <div className="row">
          <InputText aria-label="State" placeholder="State" />
          <InputText aria-label="ZIP" placeholder="ZIP" />
        </div>
        <Button label="Continue" onClick={() => location.href='/checkout/shipping'} aria-label="Continue to shipping" />
      </form>
    </div>
  )
}