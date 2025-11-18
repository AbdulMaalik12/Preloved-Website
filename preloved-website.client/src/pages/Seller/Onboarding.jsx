import Navbar from '../../components/Navbar'
import Stepper from '../../components/Stepper'

export default function Onboarding() {
  return (
    <div className="page">
      <Navbar />
      <Stepper steps={["Profile","KYC","Bank & Tax","Store Setup","Policies"]} active={0} />
      <h2>Seller Onboarding</h2>
      <form className="form">
        <input placeholder="Store Name" />
        <input placeholder="Email" />
        <button className="button" type="button" onClick={() => location.href='/seller/dashboard'}>Save</button>
      </form>
    </div>
  )
}