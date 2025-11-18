import { Link } from 'react-router-dom'

export default function ProductCard({ id = '1', title = 'Item', brand = 'Brand', price = 120, condition = 'Excellent' }) {
  return (
    <div className="card-item">
      <div className="card-image" />
      <div className="card-body">
        <div className="card-title">{brand} • {title}</div>
        <div className="card-meta">
          <span>${price}</span>
          <span className="badge">{condition}</span>
        </div>
        <Link to={`/product/${id}`} className="button">View</Link>
      </div>
    </div>
  )
}