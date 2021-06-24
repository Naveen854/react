import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, isEven: true}

  onIncrement = () => {
    this.setState(prevState => {
      const randomNumber = this.getRandomNumber()
      return {count: randomNumber, isEven: randomNumber % 2 === 0}
    })
  }

  getRandomNumber = () => parseInt(Math.max(Math.random() * 100), 10)

  render() {
    const {isEven, count} = this.state
    return (
      <div className="even-odd-card">
        <h1 className="heading">Count {count}</h1>
        <p className="count">Count is {isEven ? 'Even' : 'Odd'}</p>
        <button className="button" onClick={this.onIncrement}>
          Increment
        </button>
        <p className="description">
          *Increase By Random Number Between 0 to 100
        </p>
      </div>
    )
  }
}

export default EvenOddApp
