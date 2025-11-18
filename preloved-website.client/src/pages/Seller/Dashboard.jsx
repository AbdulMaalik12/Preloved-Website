import Navbar from '../../components/Navbar'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Button } from 'primereact/button'

export default function SellerDashboard() {
  return (
    <div className="page">
      <Navbar />
      <div className="metrics">
        <div className="metric">GMV</div>
        <div className="metric">Orders</div>
        <div className="metric">Rating</div>
      </div>
      <div className="tabs">
        <a href="#">Listings</a>
        <a href="#">Orders</a>
        <a href="#">Payouts</a>
        <a href="#">Analytics</a>
      </div>
      <DataTable value={[{title:'Denim Jacket',price:85,qty:1,condition:'Good',status:'Active'}]}>
        <Column field="title" header="Title" />
        <Column field="price" header="Price" body={(r)=>`$${r.price}`} />
        <Column field="qty" header="Qty" />
        <Column field="condition" header="Condition" />
        <Column field="status" header="Status" />
        <Column header="Actions" body={() => <Button label="Edit" onClick={()=>location.href='/seller/listing/new'} />} />
      </DataTable>
      <Button label="Create Listing" onClick={()=>location.href='/seller/listing/new'} />
    </div>
  )
}