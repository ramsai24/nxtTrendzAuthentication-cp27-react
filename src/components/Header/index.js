// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="header-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
    />
    <ul className="nav-items">
      <li>Home</li>
      <li>Products</li>
      <li>Cart</li>
      <button type="button">Logout</button>
    </ul>
  </nav>
)
export default Header
