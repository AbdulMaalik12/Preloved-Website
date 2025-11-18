import Navbar from '../../components/Navbar'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Button } from 'primereact/button'

export default function Moderation() {
  return (
    <div className="page">
      <Navbar />
      <h2>Moderation Queue</h2>
      <div className="filters-bar">
        <select><option>All</option><option>Flagged</option><option>Pending</option></select>
        <select><option>All Categories</option><option>Jackets</option><option>Shoes</option></select>
      </div>
      <DataTable value={[{listing:'Denim Jacket',seller:"Levi's Store",flags:'Image Quality',submitted:'Today'}]}>
        <Column field="listing" header="Listing" />
        <Column field="seller" header="Seller" />
        <Column field="flags" header="Flags" />
        <Column field="submitted" header="Submitted" />
        <Column header="Actions" body={() => (
          <>
            <Button label="Approve" />
            <Button label="Reject" severity="danger" />
            <Button label="Request Changes" severity="secondary" />
          </>
        )} />
      </DataTable>
    </div>
  )
}