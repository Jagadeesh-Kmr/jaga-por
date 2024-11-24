import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CoursesTimeLineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <>
      <div className="c-and-d-div">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-div">
          <AiFillClockCircle color="#171f46" />
          <p className="duration-p">{duration}</p>
        </div>
      </div>
      <p className="course-description-p">{description}</p>
      <ul className="course-tagsList-ul">
        {tagsList.map(eachTag => (
          <li className="course-tag-li" key={eachTag.id}>
            <p className="course-tag-p">{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CoursesTimeLineCard
