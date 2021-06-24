import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  incrementMangoes = () => {
    this.setState(prevState => {
      return prevState.mangoCount + 1
    })
  }

  incrementBananas = () => {
    this.setState(prevState => {
      return prevState.bananaCount + 1
    })
  }

  render() {
    return (
      <div className="fruits-counter-container">
        <div className="fruits-counter-card-container">
          <h1>
            Bob ate <span className="count">{this.state.mangoCount} </span>
            mangoes <span className="count">
              {this.state.bananaCount}{' '}
            </span>{' '}
            bananas
          </h1>
          <div className="images-container">
            <div className="fruit-card">
              <img
                className="fruit-image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button className="">Eat Mango!</button>
            </div>
            <div className="fruit-card">
              <img
                className="fruit-image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button className="">Eat Banana!</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
