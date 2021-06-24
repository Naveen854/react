import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  changeState = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        {isSubscribed ? (
          <button className="button" onClick={this.changeState}>
            Subscribed
          </button>
        ) : (
          <button className="button" onClick={this.changeState}>
            Subscribe
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
