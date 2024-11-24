import CreateContact from '../../context/CreateContact'

import './index.css'

const RequestSuccess = () => (
  <CreateContact.Consumer>
    {value => {
      const {contactData} = value

      console.log(contactData)

      const renderRequestSuccess = () => (
        <>
          <div>
            <h1>Request sent to</h1>
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

export default RequestSuccess
