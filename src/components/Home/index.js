import Sidebar from '../Sidebar'

import './index.css'

const Home = () => (
  <>
    <div className="home-mobile-div">
      <Sidebar />
    </div>
    <div className="home-main-div">
      <Sidebar />
      <div className="home-name-div">
        <h1 className="home-name">Jagadeesh Kumar</h1>
        <p className="designation">
          Upcoming <span className="frontend-name">Frontend Developer</span>
        </p>
      </div>
    </div>
  </>
)

export default Home
