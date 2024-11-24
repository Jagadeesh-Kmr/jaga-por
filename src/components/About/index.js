import {Link} from 'react-router-dom'
import './index.css'
import Header from '../Header'

const About = () => (
  <>
    <Header />
    <div className="about-div">
      <h1 className="about-main-h1">Main Heading</h1>
      <p className="about-desc">
        Being a fresher. I possess new and innovative ideas. I have the
        dedication and determination towards work.
        <br /> I am Seeking a challenging career with a progressive organization
        that provides an opportunity to capitalize my technical skills &
        abilities in the field of information technology (IT).
      </p>
      <Link to="/skills">
        <button type="button" className="about-btn">
          Skills
        </button>
      </Link>
    </div>
  </>
)

export default About
