import {Link} from 'react-router-dom'

import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaClipboardList,
} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import {GiSkills} from 'react-icons/gi'
import {RiBookmark3Line} from 'react-icons/ri'
import {HiOutlineMail} from 'react-icons/hi'

import './index.css'

const Sidebar = () => (
  <>
    <div className="sidebar-bg">
      <div className="profile-img-div">
        <img
          src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1728112767/Jagadeesh_Image_j9mbse.jpg"
          alt="profile"
          className="profile-img"
        />
        <p className="name">Jagadeesh Kumar</p>
        <div className="social-media-icon-div">
          <a
            className="visit-anchor"
            href=" https://www.linkedin.com/in/jagadeesh-kumar-553788213/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="social-media-icon" />
          </a>
          <a
            className="visit-anchor"
            href="https://www.youtube.com/@Jagadeesh-ij5rt"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube className="social-media-icon" />
          </a>
          <a
            className="visit-anchor"
            href="https://www.instagram.com/ijagadeesh24/?next=%2F"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="social-media-icon" />
          </a>

          <a
            className="visit-anchor"
            href="https://x.com/TJagadeeshkmr"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter className="social-media-icon" />
          </a>
        </div>

        <div className="details-div">
          <Link to="/about" className="detail-link">
            <CgProfile /> <p className="detail-p">About</p>
          </Link>
          <Link to="/skills" className="detail-link">
            <GiSkills /> <p className="detail-p">Skills</p>
          </Link>
          <Link to="/projects" className="detail-link">
            <FaClipboardList /> <p className="detail-p">Projects</p>
          </Link>
          <Link to="/certifications" className="detail-link">
            <RiBookmark3Line /> <p className="detail-p">Certifications</p>
          </Link>
          <Link to="/contact" className="detail-link">
            <HiOutlineMail /> <p className="detail-p">Contact</p>
          </Link>
        </div>
      </div>
    </div>
  </>
)

export default Sidebar
