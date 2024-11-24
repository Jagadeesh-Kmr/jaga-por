import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    description,
    projectUrl,
    duration,
  } = projectDetails

  return (
    <div className="project-card-div">
      <img className="project-image" src={imageUrl} alt="project" />
      <div className="project-title-Duration-div">
        <p className="project-title">{projectTitle}</p>
        <div className="duration-div">
          <AiFillCalendar color="#171f46" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <div>
        <p>
          <a href={projectUrl} target="_blank" rel="noreferrer">
            Visit
          </a>
        </p>
      </div>
    </div>
  )
}

export default ProjectTimelineCard
