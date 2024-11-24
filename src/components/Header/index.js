import {Link, withRouter} from 'react-router-dom'

import {RiFileSearchLine} from 'react-icons/ri'
import {IoBookmarkSharp} from 'react-icons/io5'

import './index.css'

const websiteLogo = 'https://assets.ccbp.in/frontend/react-js/logo-img.png'

const Header = () => (
  <>
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/">
            <img
              className="website-logo"
              src={websiteLogo}
              alt="website logo"
            />
          </Link>

          <li className="nav-menu-item-mobile-home">
            <Link to="/" className="nav-link-home">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                alt="nav home"
                className="nav-bar-home-img"
              />
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
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <Link to="/jobs" className="nav-link">
              <RiFileSearchLine className="nav-bar-icon" />
            </Link>
          </li>
          <li className="nav-menu-item-mobile">
            <Link to="/bookmarks" className="nav-link">
              <IoBookmarkSharp className="nav-bar-icon" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </>
)

export default withRouter(Header)
