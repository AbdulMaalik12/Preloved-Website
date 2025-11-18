import Navbar from '../../components/Navbar'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

export default function Register() {
  return (
    <div className="page">
      <Navbar />
      <h2>Create Account</h2>
      <form className="form" aria-label="Register Form">
        <InputText aria-label="Full Name" placeholder="Full Name" />
        <InputText aria-label="Email" placeholder="Email" />
        <InputText aria-label="Password" type="password" placeholder="Password" />
        <Button label="Create Account" onClick={() => location.href='/seller/onboarding'} aria-label="Create Account" />
      </form>
    </div>
  )
}