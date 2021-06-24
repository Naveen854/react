import {Component} from 'react'

class Counter extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }
  onDecrement = () => {
    this.setState(prevState => ({count: prevState.count - 1}))
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="counter">Count {count}</h1>
        <button className="button" onClick={this.onIncrement}>
          Increase
        </button>
        <button className="button" onClick={this.onDecrement}>
          Decrease
        </button>
      </div>
    )
  }
}

export default Counter
