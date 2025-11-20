import { Link } from 'react-router-dom'

const CDN_BASE = import.meta.env.VITE_CDN_BASE || ''

export default function ProductCard({ id = '1', title = 'Item', brand = 'Brand', price = 120, condition = 'Excellent', imageUrl = '/vite.svg' }) {
  const isAbsolute = /^https?:\/\//.test(String(imageUrl))
  const resolvedUrl = isAbsolute ? imageUrl : (CDN_BASE ? CDN_BASE + imageUrl : imageUrl)
  return (
    <div className="card-item">
      <img
        className="card-image"
        alt={title}
        src={resolvedUrl}
        srcSet={[
          `${resolvedUrl} 320w`,
          `${resolvedUrl} 640w`,
          `${resolvedUrl} 960w`
        ].join(', ')}
        sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw"
        loading="lazy"
      />
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