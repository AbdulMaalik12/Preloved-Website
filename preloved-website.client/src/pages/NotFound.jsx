import Navbar from '../components/Navbar'

export default function NotFound() {
  return (
    <div className="page">
      <Navbar />
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <a className="button" href="/">Go Home</a>
    </div>
  )
}