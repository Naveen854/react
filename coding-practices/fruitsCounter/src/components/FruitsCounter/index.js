import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  eatMango = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  eatBanana = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="fruit-counter-container">
        <h1 className="heading">
          Bob ate <span className="count">{mangoCount} </span>mangoes
          <span className="count"> {bananaCount} </span>bananas
        </h1>
        <div className="fruit-container">
          <div className="fruit-card">
            <img
              className="fruit-image"
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
            />
            <button className="button" onClick={this.eatMango}>
              Eat Mango!
            </button>
          </div>
          <div className="fruit-card">
            <img
              className="fruit-image"
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
              alt="banana"
            />
            <button className="button" onClick={this.eatBanana}>
              Eat Banana!
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
