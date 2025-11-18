import Navbar from '../components/Navbar'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Button } from 'primereact/button'

export default function Cart() {
  return (
    <div className="page">
      <Navbar />
      <h2>Cart</h2>
      <DataTable value={[
        { item: 'Denim Jacket', seller: "Levi's Store", condition: 'Good', qty: 1, price: 85 },
        { item: 'Boots', seller: 'Dr. M', condition: 'Fair', qty: 1, price: 150 }
      ]} tableStyle={{ minWidth: '50rem' }}>
        <Column field="item" header="Item" />
        <Column field="seller" header="Seller" />
        <Column field="condition" header="Condition" />
        <Column field="qty" header="Qty" />
        <Column field="price" header="Price" body={(row) => `$${row.price}`} />
        <Column header="" body={() => <Button label="Remove" severity="danger" />} />
      </DataTable>
      <div className="summary">
        <div>Subtotal: $235</div>
        <div className="actions">
          <Button label="Checkout" onClick={() => location.href='/checkout/address'} />
        </div>
      </div>
    </div>
  )
}