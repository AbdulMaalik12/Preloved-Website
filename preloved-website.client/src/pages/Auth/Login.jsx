import Navbar from '../../components/Navbar'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

export default function Login() {
  return (
    <div className="page">
      <Navbar />
      <h2>Login</h2>
      <form className="form" aria-label="Login Form">
        <InputText aria-label="Email" placeholder="Email" />
        <InputText aria-label="Password" type="password" placeholder="Password" />
        <Button label="Sign In" onClick={() => location.href='/account'} aria-label="Sign In" />
      </form>
      <div>New here? <a href="/register">Create an account</a></div>
    </div>
  )
}