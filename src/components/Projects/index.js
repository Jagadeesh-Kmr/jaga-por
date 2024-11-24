import Header from '../Header'

import './index.css'

const Projects = () => (
  <>
    <Header />
    <div className="projects-bg-container">
      <h1 className="my-projects">Projects</h1>
      <hr className="projects-hr-line" />
      <div className="project-hading-div">
        <div>
          <h1 className="project-h1">Jobby App</h1>
        </div>
        <div>
          <a
            href="https://jagadeeshjb.ccbp.tech/login"
            target="_blank"
            rel="noreferrer"
            className="link-element"
          >
            Project1 Link
          </a>
        </div>
      </div>
      <div className="technologies-used-div">
        <p className="technologies-used-p">
          <span className="tech-span">Technologies used:</span> React JS, JS,
          CSS, Bootstrap, Routing, REST API Calls, Local Storage, JWT Token,
          Authorization, Authentication <br />
        </p>
        <p className="technologies-used-p" style={{marginTop: '20px'}}>
          Brought to life an all-encompassing job search platform, Jobby App.
          (username: rahul Password: rahul@2021)
        </p>
        <ul>
          <li style={{marginBottom: '10px'}}>
            Created pages for Login, Home, Jobs, and Job item details with React
            components, form inputs, and event handlers.
          </li>
          <li style={{marginBottom: '10px'}}>
            Secured user information with JWT tokens, REST API calls, and local
            storage.
          </li>
          <li style={{marginBottom: '10px'}}>
            Utilized React Router for protected routes and persisted login
            state.
          </li>
        </ul>
      </div>

      <hr className="projects-hr-line" />

      <div className="project-hading-div">
        <div>
          <h1 className="project-h1">
            Nxt Trendz ( ECommerce Clone - Amazon, Flipkart)
          </h1>
        </div>
        <div>
          <a
            href="https://jagadeeshsp.ccbp.tech/login"
            target="_blank"
            rel="noreferrer"
            className="link-element"
          >
            Project2 Link
          </a>
        </div>
      </div>
      <div className="technologies-used-div">
        <p className="technologies-used-p">
          <span className="tech-span">Technologies used:</span> React JS, JS,
          CSS, Bootstrap, Routing, REST API Calls, Local Storage, JWT Token,
          Authorization, Authentication
          <br />
        </p>
        <p className="technologies-used-p" style={{marginTop: '20px'}}>
          Created a modern e-commerce experience with a design inspired by
          Amazon and Flipkart. (username: rahul Password: rahul@2021)
        </p>
        <ul>
          <li style={{marginBottom: '10px'}}>
            Implemented pages for Login, Products, and Product details with
            React Router, React components, and form inputs.
          </li>
          <li style={{marginBottom: '10px'}}>
            Secured user data with JWT tokens, REST API calls, and local
            storage.
          </li>
        </ul>
      </div>

      <hr className="projects-hr-line" />

      <div className="project-hading-div">
        <div>
          <h1 className="project-h1">Tasty Kitchens (Swiggy/Zomato Clone)</h1>
        </div>
        <div>
          <a
            href="https://jagadeeshkmrapp.ccbp.tech/login"
            target="_blank"
            rel="noreferrer"
            className="link-element"
          >
            Project3 Link
          </a>
        </div>
      </div>
      <div className="technologies-used-div">
        <p className="technologies-used-p">
          <span className="tech-span">Technologies used:</span> HTML, CSS,
          JavaScript, React JS, Bootstrap, React Slick, Figma, client storage
          <br />
        </p>
        <p className="technologies-used-p" style={{marginTop: '20px'}}>
          Constructed an engaging Online Food Ordering Service akin to
          Swiggy/Zomato, enabling users to discover top restaurants, obtain
          in-depth restaurant details, manage their cart, and process payments.
          (username: rahul Password: rahul@2021)
        </p>
        <ul>
          <li style={{marginBottom: '10px'}}>
            Set up unique routes for features such as login, home screen,
            individual restaurant data, and cart management using React Router
            components (Route, Switch, Link)
          </li>
          <li style={{marginBottom: '10px'}}>
            Incorporated a fluid horizontal scrolling capability (carousel
            images) on the home screen with the help of the React Slick library.
          </li>
          <li style={{marginBottom: '5px'}}>
            Developed visually striking and exact React components by following
            Figma mockups and using REST APIs to fetch popular restaurants and
            specific restaurant information
          </li>
        </ul>
      </div>
    </div>
  </>
)

export default Projects
