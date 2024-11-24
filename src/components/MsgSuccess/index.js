import CreateContact from '../../context/CreateContact'

import './index.css'

const MsgSuccess = () => (
  <CreateContact.Consumer>
    {value => {
      const {contactData} = value

      const contactInfo = contactData.contactDetails

      const renderRequestSuccess = () => (
        <>
          <div className="rq-bg-div">
            <img
              src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1689438440/VectorgreenTick_ooyohn.png"
              alt="order success"
              className="green-tick-img"
            />
            <h1 className="rq-h">Message sent to</h1>
            <p className="person-name">{contactInfo.personName}</p>
          </div>
        </>
      )

      return (
        <>
          <div className="rq-main-div">{renderRequestSuccess()}</div>
        </>
      )
    }}
  </CreateContact.Consumer>
)

export default MsgSuccess
