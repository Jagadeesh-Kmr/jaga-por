import {Link, withRouter} from 'react-router-dom'

import './index.css'

const Header = () => (
  <>
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <li className="nav-menu-item-mobile-home">
            <Link to="/about" className="nav-link-about">
              About<span style={{color: '#ffffff'}}>ME.</span>
            </Link>
          </li>
        </div>

        <div className="nav-bar-large-container">
          <Link to="/about" className="nav-link-about">
            About<span style={{color: '#ffffff'}}>ME.</span>
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/skills" className="nav-link">
                Skills
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/projects" className="nav-link">
                Projects
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/certifications" className="nav-link">
                Certifications
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
)

export default withRouter(Header)
