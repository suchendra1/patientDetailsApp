import { Link } from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="blog-container">
      <h1 className="blog-title">Records</h1>
      <ul className="nav-menu">
        <Link className="nav-link" to="/">
          <li>Login</li>
        </Link>
        <Link className="nav-link" to="/register">
          <li>Register</li>
        </Link>
        <Link className="nav-link" to="/newrecord">
          <li>New Record</li>
        </Link>
        <Link className="nav-link" to="/showrecord">
          <li>Show Records</li>
        </Link>
      </ul>
    </div>
  </nav>
)

export default Header