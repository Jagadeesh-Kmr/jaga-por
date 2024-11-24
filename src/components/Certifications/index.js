import Header from '../Header'

import './index.css'

const Certifications = () => (
  <>
    <Header />
    <div className="certifications-bg-div">
      <h1 className="cert-h1">Frontend Certifications</h1>
      <hr className="cert-hr-line" />
      <div className="cert-hading-div">
        <div>
          <h1 className="cert-name" style={{marginRight: '80px'}}>
            React Js
          </h1>
          <p className="tp-cv-p">Topics Covered</p>
        </div>
        <div>
          <a
            href="https://certificates.ccbp.in/intensive/react-js?id=XSKXTXKPOQ"
            target="_blank"
            rel="noreferrer"
            className="cert-link-element"
          >
            React Js (ccbp.in)
          </a>
        </div>
      </div>
      <div className="key-points-div">
        <ul className="key-points-ul">
          <li className="key-points-li">Components and Props</li>
          <li className="key-points-li">Lists and Keys</li>
          <li className="key-points-li">Handling Events</li>
          <li className="key-points-li">Conditional Rendering</li>
          <li className="key-points-li">Routing using React Router</li>
          <li className="key-points-li">Authentication & Authorization </li>
          <li className="key-points-li">React Context</li>
          <li className="key-points-li">Styled Components</li>
          <li className="key-points-li">Third-Party Packages</li>
        </ul>
      </div>

      <hr className="cert-hr-line" />

      <div className="cert-hading-div">
        <div>
          <h1 className="cert-name">JAVASCRIPT ESSENTIALS</h1>
          <p className="tp-cv-p">Topics Covered</p>
        </div>

        <div>
          <a
            href="https://certificates.ccbp.in/intensive/javascript-essentials?id=MWLXYJLHTM"
            target="_blank"
            rel="noreferrer"
            className="cert-link-element"
          >
            JavaScript Essentials(ccbp.in)
          </a>
        </div>
      </div>
      <div className="key-points-div">
        <ul className="key-points-ul">
          <li className="key-points-li">Factory and Constructor</li>
          <li className="key-points-li">Prototype and classes</li>
          <li className="key-points-li">Asynchronous JS</li>
          <li className="key-points-li">Scope & Hoisting</li>
          <li className="key-points-li">Array methods</li>
        </ul>
      </div>

      <hr className="cert-hr-line" />

      <div className="cert-hading-div">
        <div>
          <h1 className="cert-name">Developer Foundations</h1>
          <p className="tp-cv-p">Topics Covered</p>
        </div>
        <div>
          <a
            href="https://certificates.ccbp.in/intensive/developer-foundations?id=MWQFCTFCES"
            target="_blank"
            rel="noreferrer"
            className="cert-link-element"
          >
            Developer Foundations(ccbp.in)
          </a>
        </div>
      </div>
      <div className="key-points-div">
        <ul className="key-points-ul">
          <li className="key-points-li"> Fundamentals of Computer Science</li>
          <li className="key-points-li">Work with command line</li>
          <li className="key-points-li">Collaborating with Git</li>
        </ul>
      </div>
    </div>
  </>
)

export default Certifications
