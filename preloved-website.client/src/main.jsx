import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import './App.css'
import 'primereact/resources/themes/lara-light-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import './styles/ui-theme.css'
import Home from './pages/Home.jsx'
import Search from './pages/Search.jsx'
import Product from './pages/Product.jsx'
import Cart from './pages/Cart.jsx'
import Address from './pages/Checkout/Address.jsx'
import Shipping from './pages/Checkout/Shipping.jsx'
import Payment from './pages/Checkout/Payment.jsx'
import Review from './pages/Checkout/Review.jsx'
import Account from './pages/Account/Index.jsx'
import Onboarding from './pages/Seller/Onboarding.jsx'
import SellerDashboard from './pages/Seller/Dashboard.jsx'
import ListingWizard from './pages/Seller/ListingWizard.jsx'
import Moderation from './pages/Admin/Moderation.jsx'
import Login from './pages/Auth/Login.jsx'
import Register from './pages/Auth/Register.jsx'
import Confirmation from './pages/Order/Confirmation.jsx'
import Tracking from './pages/Order/Tracking.jsx'
import NotFound from './pages/NotFound.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout/address" element={<Address />} />
        <Route path="/checkout/shipping" element={<Shipping />} />
        <Route path="/checkout/payment" element={<Payment />} />
        <Route path="/checkout/review" element={<Review />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/order/confirm" element={<Confirmation />} />
        <Route path="/order/:id/tracking" element={<Tracking />} />
        <Route path="/seller/onboarding" element={<Onboarding />} />
        <Route path="/seller/dashboard" element={<SellerDashboard />} />
        <Route path="/seller/listing/new" element={<ListingWizard />} />
        <Route path="/admin/moderation" element={<Moderation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
