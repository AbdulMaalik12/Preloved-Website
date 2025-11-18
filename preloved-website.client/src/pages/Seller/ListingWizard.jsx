import Navbar from '../../components/Navbar'
import Stepper from '../../components/Stepper'
import { Steps } from 'primereact/steps'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { Button } from 'primereact/button'

export default function ListingWizard() {
  return (
    <div className="page">
      <Navbar />
      <Stepper steps={["Details","Photos","Pricing","Verification","Publish"]} active={0} />
      <div className="wizard">
        <div className="panel">
          <h2>Create Listing</h2>
          <InputText placeholder="Title" />
          <InputText placeholder="Brand" />
          <InputText placeholder="Category" />
          <InputText placeholder="Size" />
          <InputText placeholder="Color" />
          <div className="row">
            <Dropdown options={["NWT","Excellent","Good","Fair"]} placeholder="Condition" />
            <InputText placeholder="Price" />
          </div>
          <Button label="Next" />
        </div>
      </div>
    </div>
  )
}