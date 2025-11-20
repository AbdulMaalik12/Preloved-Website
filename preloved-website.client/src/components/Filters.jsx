import { useState } from 'react'
import { Accordion, AccordionTab } from 'primereact/accordion'
import { InputText } from 'primereact/inputtext'
import { MultiSelect } from 'primereact/multiselect'
import { Dropdown } from 'primereact/dropdown'
import { Slider } from 'primereact/slider'
import { Checkbox } from 'primereact/checkbox'
import { Button } from 'primereact/button'

const sizeOptions = ['XS', 'S', 'M', 'L', 'XL'].map(x => ({ label: x, value: x }))
const conditionOptions = ['NWT', 'Excellent', 'Good', 'Fair'].map(x => ({ label: x, value: x }))

export default function Filters({ onApply }) {
  const [brand, setBrand] = useState('')
  const [sizes, setSizes] = useState([])
  const [condition, setCondition] = useState(null)
  const [price, setPrice] = useState([0, 300])
  const [verified, setVerified] = useState(false)

  const apply = () => {
    onApply?.({ brand, sizes, condition, price, verified })
  }
  const clear = () => {
    setBrand('')
    setSizes([])
    setCondition(null)
    setPrice([0, 300])
    setVerified(false)
    onApply?.({ brand: '', sizes: [], condition: null, price: [0, 300], verified: false })
  }

  return (
    <aside className="filters">
      <div className="panel">
        <div className="p-d-flex p-jc-between p-ai-center">
          <h3>Filters</h3>
          <Button text label="Clear" onClick={clear} />
        </div>
        <Accordion>
          <AccordionTab header="Brand">
            <InputText value={brand} onChange={(e) => setBrand(e.target.value)} placeholder="e.g. Levi's" />
          </AccordionTab>
          <AccordionTab header="Size">
            <MultiSelect value={sizes} onChange={(e) => setSizes(e.value)} options={sizeOptions} display="chip" placeholder="Select sizes" />
          </AccordionTab>
          <AccordionTab header="Condition">
            <Dropdown value={condition} onChange={(e) => setCondition(e.value)} options={conditionOptions} optionLabel="label" optionValue="value" placeholder="Any" />
          </AccordionTab>
          <AccordionTab header="Price">
            <div className="p-d-flex p-ai-center p-gap-2">
              <span>${price[0]}</span>
              <Slider value={price} onChange={(e) => setPrice(e.value)} range min={0} max={500} />
              <span>${price[1]}</span>
            </div>
          </AccordionTab>
          <AccordionTab header="Verification">
            <div className="p-d-flex p-ai-center p-gap-2">
              <Checkbox checked={verified} onChange={(e) => setVerified(e.checked)} />
              <span>Verified items only</span>
            </div>
          </AccordionTab>
        </Accordion>
        <div className="filter-actions">
          <Button label="Apply" icon="pi pi-filter" onClick={apply} />
        </div>
      </div>
    </aside>
  )
}