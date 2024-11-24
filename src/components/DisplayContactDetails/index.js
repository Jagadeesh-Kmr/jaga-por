const DisplayContactDetails = props => {
  const {displayContactDetail} = props
  console.log(displayContactDetail)
  return (
    <>
      <li>
        <p>{displayContactDetail.personName}</p>
      </li>
    </>
  )
}

export default DisplayContactDetails
