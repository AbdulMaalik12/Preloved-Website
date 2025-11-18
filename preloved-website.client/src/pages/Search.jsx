import Navbar from '../components/Navbar'
import Filters from '../components/Filters'
import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { DataView } from 'primereact/dataview'

export default function Search() {
  return (
    <div className="page">
      <Navbar />
      <div className="content">
        <Filters />
        <div className="results">
          <div className="toolbar p-grid p-align-center p-justify-between">
            <div className="p-col">
              <InputText aria-label="Brand filter" placeholder="Filter by brand" />
            </div>
            <div className="p-col">
              <Dropdown aria-label="Sort" options={["Relevance","Newest","Price"]} placeholder="Sort" />
            </div>
            <div className="p-col">
              <Button label="Apply" icon="pi pi-filter" aria-label="Apply filters" />
            </div>
          </div>
          <DataView
            value={[
              { id: '201', title: 'Hoodie', brand: 'Adidas', price: 60, condition: 'Good' },
              { id: '202', title: 'Jeans', brand: "Levi's", price: 70, condition: 'Excellent' },
              { id: '203', title: 'Boots', brand: 'Dr. Martens', price: 150, condition: 'Fair' },
              { id: '204', title: 'Coat', brand: 'COS', price: 190, condition: 'NWT' },
              { id: '205', title: 'T-Shirt', brand: 'Uniqlo', price: 25, condition: 'NWT' },
              { id: '206', title: 'Dress', brand: 'Zara', price: 45, condition: 'Fair' }
            ]}
            layout="grid"
            itemTemplate={(item) => (
              <div className="p-col-12 p-md-6 p-lg-3">
                <div className="card-item">
                  <div className="card-image" />
                  <div className="card-body">
                    <div className="card-title">{item.brand} • {item.title}</div>
                    <div className="card-meta"><span>${item.price}</span><span className="badge">{item.condition}</span></div>
                    <Button label="View" onClick={() => location.href=`/product/${item.id}`} />
                  </div>
                </div>
              </div>
            )}
            paginator rows={12}
          />
        </div>
      </div>
    </div>
  )
}