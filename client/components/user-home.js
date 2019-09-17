import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import AllBooks from './all-books'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props

  return (
    <div>
      <h3>Welcome, {email ? email : 'Guest'}</h3>
      <AllBooks />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
