import {Component} from 'react'
import './index.css'

class ReadomNumberGenerator extends Component {
  state = {randomNumber: 0}

  getRandomNumber = () => {
    this.setState({randomNumber: parseInt(Math.max(Math.random() * 100), 10)})
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="random-number-card">
        <h1 className="card-heading">Random Number</h1>
        <p className="description">
          Generate a random number in the range of 0 to 100
        </p>
        <button className="button" onClick={this.getRandomNumber}>
          Generate
        </button>
        <p className="random-number">{randomNumber}</p>
      </div>
    )
  }
}

export default ReadomNumberGenerator
