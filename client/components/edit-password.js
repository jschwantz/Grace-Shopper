import React from 'react'
import {connect} from 'react-redux'

class Profile extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div className="password-container">
        <div className="change-pass">
          <div>Old Password</div>
          <div>New Password</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Profile)
