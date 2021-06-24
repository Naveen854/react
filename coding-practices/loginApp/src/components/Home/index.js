import {Component} from 'react'
import './index.css'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isUserLoggedIn: false}

  userLoggedIn = () => {
    this.setState({isUserLoggedIn: true})
  }

  userLoggedOut = () => {
    this.setState({isUserLoggedIn: false})
  }

  getUserActivityCard = () => {
    const {isUserLoggedIn} = this.state
    if (isUserLoggedIn) {
      return (
        <div className="login-app-container">
          <Message message="Welcome User" />
          <Logout changeLoginState={this.userLoggedOut} />
        </div>
      )
    }
    return (
      <div className="login-app-container">
        <Message message="Please Login" />
        <Login changeLoginState={this.userLoggedIn} />
      </div>
    )
  }

  render() {
    return this.getUserActivityCard()
  }
}
export default Home
//
