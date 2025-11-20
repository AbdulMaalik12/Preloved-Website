import Navbar from '../components/Navbar'
import Filters from '../components/Filters'
import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { DataView } from 'primereact/dataview'
import SchemaOrg from '../components/SchemaOrg'
import { saveSearch, getSavedSearches, deleteSearch } from '../utils/savedSearches'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Toast } from 'primereact/toast'
import { Skeleton } from 'primereact/skeleton'
import ProductCard from '../components/ProductCard'

export default function Search() {
  const items = [
    { id: '201', title: 'Hoodie', brand: 'Adidas', price: 60, condition: 'Good', imageUrl: 'https://picsum.photos/id/1027/960/640' },
    { id: '202', title: 'Jeans', brand: "Levi's", price: 70, condition: 'Excellent', imageUrl: 'https://picsum.photos/id/1062/960/640' },
    { id: '203', title: 'Boots', brand: 'Dr. Martens', price: 150, condition: 'Fair', imageUrl: 'https://picsum.photos/id/1011/960/640' },
    { id: '204', title: 'Coat', brand: 'COS', price: 190, condition: 'NWT', imageUrl: 'https://picsum.photos/id/102/960/640' },
    { id: '205', title: 'T-Shirt', brand: 'Uniqlo', price: 25, condition: 'NWT', imageUrl: 'https://picsum.photos/id/1035/960/640' },
    { id: '206', title: 'Dress', brand: 'Zara', price: 45, condition: 'Fair', imageUrl: 'https://picsum.photos/id/1074/960/640' }
  ]
  const [saved, setSaved] = useState(() => getSavedSearches())
  const [filters, setFilters] = useState(() => ({ brand: new URLSearchParams(location.search).get('brand') || '' }))
  const [loading, setLoading] = useState(true)
  const toast = useRef(null)
  const navigate = useNavigate()
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600)
    return () => clearTimeout(t)
  }, [])
  const onSave = () => {
    saveSearch({ name: 'Current Search', query: location.search, filters: {}, createdAt: Date.now() })
    setSaved(getSavedSearches())
    toast.current?.show({ severity: 'success', summary: 'Saved', detail: 'Search saved' })
  }
  const onApply = (s) => { navigate('/search' + (s.query || '')) }
  const onDelete = (id) => { deleteSearch(id); setSaved(getSavedSearches()); toast.current?.show({ severity: 'info', summary: 'Deleted', detail: 'Saved search removed' }) }
  const filteredItems = items.filter(it => {
    const okBrand = !filters.brand || it.brand.toLowerCase().includes(String(filters.brand).toLowerCase())
    const okCond = !filters.condition || it.condition === filters.condition
    const range = filters.price || [0, 100000]
    const okPrice = it.price >= range[0] && it.price <= range[1]
    return okBrand && okCond && okPrice
  })
  return (
    <div className="page">
      <Navbar />
      <Toast ref={toast} />
      <SchemaOrg data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": items.map((x, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "url": `https://localhost/product/${x.id}`,
          "name": `${x.brand} ${x.title}`
        }))
      }} />
      <div className="content">
        <Filters onApply={setFilters} />
        <div className="results">
          <div className="toolbar p-grid p-align-center p-justify-between">
            <div className="p-col">
              <InputText aria-label="Brand filter" placeholder="Filter by brand" value={filters.brand || ''} onChange={(e) => setFilters({ ...filters, brand: e.target.value })} />
            </div>
            <div className="p-col">
              <Dropdown aria-label="Sort" options={["Relevance","Newest","Price"]} placeholder="Sort" />
            </div>
            <div className="p-col">
              <Button label="Save Search" icon="pi pi-save" onClick={onSave} />
            </div>
          </div>
          <div className="panel">
            <h3>Saved Searches</h3>
            <div className="p-d-flex p-flex-column p-gap-2">
              {saved.map(s => (
                <div key={s.id} className="p-d-flex p-jc-between p-ai-center">
                  <span>{s.name}</span>
                  <div className="p-d-flex p-gap-2">
                    <Button label="Apply" onClick={() => onApply(s)} />
                    <Button label="Delete" severity="danger" onClick={() => onDelete(s.id)} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <DataView
            value={filteredItems}
            layout="grid"
            itemTemplate={(item) => (
              <div className="p-col-12 p-md-6 p-lg-3">
                {loading ? (
                  <div className="card-item">
                    <Skeleton width="100%" height="160px" />
                    <div className="card-body">
                      <Skeleton width="60%" />
                      <Skeleton width="40%" />
                    </div>
                  </div>
                ) : (
                  <ProductCard id={item.id} title={item.title} brand={item.brand} price={item.price} condition={item.condition} imageUrl={item.imageUrl} />
                )}
              </div>
            )}
            paginator rows={12}
          />
        </div>
      </div>
    </div>
  )
}