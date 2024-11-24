import {useState} from 'react'

import Header from '../Header'
import MsgSuccess from '../MsgSuccess'
import CartContact from '../../context/CreateContact'

import './index.css'

const Contact = () => {
  const [personName, setPersonName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [gender, setGender] = useState('')

  return (
    <CartContact.Consumer>
      {value => {
        const {addContactData, contactData} = value

        const onClickPayNow = () => {
          addContactData({personName, email, phone, gender})
        }

        const ContactLen = contactData.length === 0

        const renderPersonDetails = () => (
          <>
            <div className="person-details-bg-div">
              <div>
                <input
                  type="text"
                  className="p-d-input"
                  placeholder="Name"
                  onChange={e => setPersonName(e.target.value)}
                />
                <input
                  type="text"
                  className="p-d-input"
                  placeholder="Phone Number"
                  onChange={e => setPhone(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="text"
                  className="p-d-input"
                  placeholder="E-Mail"
                  onChange={e => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  className="p-d-input"
                  placeholder="Message"
                  onChange={e => setGender(e.target.value)}
                />
              </div>
            </div>
          </>
        )

        return (
          <>
            <Header />
            <div className="contact-main-div">
              {ContactLen ? (
                <>
                  <h1 className="contact-h">Contact Form</h1>
                  {renderPersonDetails()}
                  <div className="contact-btn-div">
                    <button
                      type="button"
                      className="contact-btn"
                      onClick={onClickPayNow}
                    >
                      Contact
                    </button>
                  </div>
                </>
              ) : (
                <MsgSuccess />
              )}
            </div>
          </>
        )
      }}
    </CartContact.Consumer>
  )
}

export default Contact
