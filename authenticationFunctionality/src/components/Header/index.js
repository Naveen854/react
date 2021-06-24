import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <Link to="/" className="nav-link">
      Home
    </Link>
    <Link to="/about" className="nav-link">
      About
    </Link>
  </nav>
)

export default Header
