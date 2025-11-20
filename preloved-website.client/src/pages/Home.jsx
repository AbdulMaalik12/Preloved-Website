import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import { Link, useNavigate } from 'react-router-dom'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { Tag } from 'primereact/tag'
import { Divider } from 'primereact/divider'
import { Dialog } from 'primereact/dialog'
import { useState } from 'react'
import { Carousel } from 'primereact/carousel'
import FamilyBanner from '../components/FamilyBanner'

export default function Home() {
  const [chooseTypeOpen, setChooseTypeOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const navigate = useNavigate()
  const openChoice = (cat) => { setSelectedCategory(cat); setChooseTypeOpen(true) }
  const goType = (type) => { setChooseTypeOpen(false); if (selectedCategory) navigate(`/search?type=${type}&category=${selectedCategory}`) }
  const BG_WOMEN = import.meta.env.VITE_BG_WOMEN || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop'
  const BG_MEN = import.meta.env.VITE_BG_MEN || 'https://images.unsplash.com/photo-1594633312681-3b23a3b81683?q=80&w=1600&auto=format&fit=crop'
  const BG_KIDS = import.meta.env.VITE_BG_KIDS || 'https://images.unsplash.com/photo-1502980426475-b83966705988?q=80&w=1600&auto=format&fit=crop'
  const bgStyle = (url, tint) => ({ backgroundImage: `linear-gradient(${tint}), url(${url})` })
  const brandNames = ["Levi's","Nike","Adidas","Zara","COS","Uniqlo","Dr. Martens","Mango","H&M","Massimo Dutti","Puma","New Balance"]
  const palettes = ['grad-pink','grad-indigo','grad-teal','grad-amber','grad-purple']
  const brands = brandNames.map((name, i) => ({ name, className: palettes[i % palettes.length], initials: name.split(' ').map(w => w[0]).join('').replace("'", '') }))
  const brandTemplate = (item) => (
    <div className={`brand-card ${item.className}`} onClick={() => navigate(`/search?brand=${encodeURIComponent(item.name)}`)}>
      <div className="brand-logo">{item.initials}</div>
      <div className="brand-name">{item.name}</div>
    </div>
  )
  return (
    <div className="page">
      <Navbar />
   
      <section className="sections">
        <div className="section-card women" role="button" aria-label="Women" onClick={() => openChoice('women')} style={bgStyle( 'to bottom, rgba(244,114,182,0.35), rgba(255,255,255,0.15)')}>
          <div className="title">Women</div>
        </div>
        <div className="section-card men" role="button" aria-label="Men" onClick={() => openChoice('men')} style={bgStyle( 'to bottom, rgba(30,64,175,0.35), rgba(255,255,255,0.15)')}>
          <div className="title">Men</div>
        </div>
        <div className="section-card kids" role="button" aria-label="Kids" onClick={() => openChoice('kids')} style={bgStyle('to bottom, rgba(20,184,166,0.35), rgba(255,255,255,0.15)')}>
          <div className="title">Kids</div>
        </div>
      </section>
      <Dialog visible={chooseTypeOpen} onHide={() => setChooseTypeOpen(false)} header={selectedCategory ? selectedCategory.toUpperCase() : 'Select'}>
        <div className="p-d-flex p-jc-center p-gap-3">
          <Button label="New" size="large" onClick={() => goType('new')} />
          <Button label="Preloved" severity="secondary" size="large" onClick={() => goType('preloved')} />
        </div>
      </Dialog>
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
              <ProductCard id="101" title="Denim Jacket" brand="Levi's" price={85} condition="Good" imageUrl="https://picsum.photos/id/1027/960/640" />
              <ProductCard id="102" title="Sneakers" brand="Nike" price={120} condition="Excellent" imageUrl="https://picsum.photos/id/1062/960/640" />
              <ProductCard id="103" title="Dress" brand="Zara" price={45} condition="Fair" imageUrl="https://picsum.photos/id/1074/960/640" />
              <ProductCard id="104" title="T‑Shirt" brand="Uniqlo" price={25} condition="NWT" imageUrl="https://picsum.photos/id/1035/960/640" />
            </div>
            <Button label="Browse more" className="p-mt-3" onClick={() => location.href='/search?type=preloved'} />
          </Card>
        </div>
        <div className="p-col">
          <Card title="Featured New" subTitle="Latest arrivals">
            <div className="grid">
              <ProductCard id="105" title="Blazer" brand="H&M" price={95} condition="NWT" imageUrl="https://picsum.photos/id/1011/960/640" />
              <ProductCard id="106" title="Pants" brand="COS" price={110} condition="NWT" imageUrl="https://picsum.photos/id/102/960/640" />
              <ProductCard id="107" title="Shirt" brand="Massimo Dutti" price={80} condition="NWT" imageUrl="https://picsum.photos/id/1027/960/640" />
              <ProductCard id="108" title="Skirt" brand="Mango" price={60} condition="NWT" imageUrl="https://picsum.photos/id/1074/960/640" />
            </div>
            <Button label="Browse more" className="p-mt-3" onClick={() => location.href='/search?type=new'} />
          </Card>
        </div>
      </div>
      <Divider />
      <section className="brands-section">
        <div className="brands-header">
          <h3>Trending Brands</h3>
          <Button text label="View all" onClick={() => navigate('/search')} />
        </div>
        <Carousel value={brands} itemTemplate={brandTemplate} numVisible={5} numScroll={3} autoplayInterval={4000} circular responsiveOptions={[
          { breakpoint: '1200px', numVisible: 4, numScroll: 2 },
          { breakpoint: '900px', numVisible: 3, numScroll: 2 },
          { breakpoint: '600px', numVisible: 2, numScroll: 1 }
        ]} />
      </section>
    </div>
  )
}