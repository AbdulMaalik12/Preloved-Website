import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { Tag } from 'primereact/tag'
import { Divider } from 'primereact/divider'

export default function Home() {
  return (
    <div className="page">
      <Navbar />
      <section className="hero">
        <h1>Shop Preloved & New</h1>
        <div className="cta">
          <Link className="button" to="/search?type=preloved">Shop Preloved</Link>
          <Link className="button" to="/search?type=new">Shop New</Link>
        </div>
      </section>
      <Divider />
      <div className="p-grid">
        <div className="p-col">
          <Card title="Featured Preloved" subTitle="Curated finds">
            <div className="grid">
              <ProductCard id="101" title="Denim Jacket" brand="Levi's" price={85} condition="Good" />
              <ProductCard id="102" title="Sneakers" brand="Nike" price={120} condition="Excellent" />
              <ProductCard id="103" title="Dress" brand="Zara" price={45} condition="Fair" />
              <ProductCard id="104" title="T‑Shirt" brand="Uniqlo" price={25} condition="NWT" />
            </div>
            <Button label="Browse more" className="p-mt-3" onClick={() => location.href='/search?type=preloved'} />
          </Card>
        </div>
        <div className="p-col">
          <Card title="Featured New" subTitle="Latest arrivals">
            <div className="grid">
              <ProductCard id="105" title="Blazer" brand="H&M" price={95} condition="NWT" />
              <ProductCard id="106" title="Pants" brand="COS" price={110} condition="NWT" />
              <ProductCard id="107" title="Shirt" brand="Massimo Dutti" price={80} condition="NWT" />
              <ProductCard id="108" title="Skirt" brand="Mango" price={60} condition="NWT" />
            </div>
            <Button label="Browse more" className="p-mt-3" onClick={() => location.href='/search?type=new'} />
          </Card>
        </div>
      </div>
      <Divider />
      <section>
        <h3>Trending Brands</h3>
        <div className="p-d-flex p-flex-wrap p-gap-2">
          {['Levi\'s','Nike','Adidas','Zara','COS','Uniqlo','Dr. Martens','Mango'].map(b => (
            <Tag key={b} value={b} severity="info" />
          ))}
        </div>
      </section>
    </div>
  )
}