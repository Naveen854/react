import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {speed: 0}

  accelerate = () => {
    this.setState(prevState => ({
      speed: prevState.speed >= 200 ? 200 : prevState.speed + 10,
    }))
  }

  applyBreak = () => {
    this.setState(prevState => ({
      speed: prevState.speed <= 0 ? 0 : prevState.speed - 10,
    }))
  }

  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="speedometer-image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="speed-indicator">Speed is {speed}mph</h1>
        <p className="speed-limits">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            type="button"
            className="accelerate-button"
            onClick={this.accelerate}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="break-button"
            onClick={this.applyBreak}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
