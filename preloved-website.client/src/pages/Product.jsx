import Navbar from '../components/Navbar'
import { TabView, TabPanel } from 'primereact/tabview'
import { Rating } from 'primereact/rating'
import { Button } from 'primereact/button'
import { Tag } from 'primereact/tag'
import SchemaOrg from '../components/SchemaOrg'

export default function Product() {
  return (
    <div className="page">
      <Navbar />
      <SchemaOrg data={{
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Denim Jacket",
        "brand": { "@type": "Brand", "name": "Levi's" },
        "category": "Jackets",
        "offers": {
          "@type": "Offer",
          "price": "85",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4",
          "reviewCount": "124"
        }
      }} />
      <div className="pdp">
        <div className="gallery">
          <div className="image" />
          <div className="thumbs">
            <div className="thumb" />
            <div className="thumb" />
            <div className="thumb" />
          </div>
        </div>
        <div className="panel">
          <h2>Denim Jacket</h2>
          <div className="meta">Levi's • Jackets</div>
          <div className="price">$85 <Tag value="Good" /></div>
          <div className="selectors">
            <label>Size</label>
            <select><option>M</option><option>L</option></select>
          </div>
          <div className="actions">
            <Button label="Add to Cart" />
            <Button label="Buy Now" severity="success" />
          </div>
          <TabView>
            <TabPanel header="Description">
              Classic denim jacket with minimal wear.
            </TabPanel>
            <TabPanel header="Measurements">
              Chest 40", Length 25".
            </TabPanel>
            <TabPanel header="Shipping & Returns">
              Express 2–3 days. Returns within 14 days.
            </TabPanel>
            <TabPanel header="Reviews">
              <Rating value={4} readOnly cancel={false} />
            </TabPanel>
          </TabView>
        </div>
      </div>
    </div>
  )
}