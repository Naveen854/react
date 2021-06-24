import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timeInSeconds: 0}

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  updateTime = () => {
    this.setState(prevState => ({timeInSeconds: prevState.timeInSeconds + 1}))
  }

  startTimer = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
  }

  stopTimer = () => {
    this.setState(prevState => ({timeInSeconds: prevState.timeInSeconds}))
    clearInterval(this.timeInterval)
  }

  resetTimer = () => {
    this.setState({timeInSeconds: 0})
    clearInterval(this.timeInterval)
  }

  renderSeconds = () => {
    const {timeInSeconds} = this.state
    const seconds = timeInSeconds % 60
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeInSeconds} = this.state
    const minutes = Math.floor(timeInSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-container">
            <p className="timer-heading">
              <img
                className="timer-image"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="timer"
              />
              Timer
            </p>
            <h1 testid="timer" className="time-text">
              {time}
            </h1>
            <div className="stopwatch-control-section">
              <button
                type="button"
                className="control-button start"
                onClick={this.startTimer}
              >
                Start
              </button>
              <button
                type="button"
                className="control-button stop"
                onClick={this.stopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="control-button reset"
                onClick={this.resetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
