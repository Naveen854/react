import {Component} from 'react'
import './index.css'

class AgeCalculator extends Component {
  state = {inputYear: '', isValidYear: true, message: ''}

  onChangeInput = event => {
    this.setState({inputYear: event.target.value, message: ''})
  }

  calculateAge = () => {
    const {inputYear} = this.state
    console.log('Input year', inputYear)
    const year = inputYear.length === 4 && parseInt(inputYear, 10)
    console.log(year)
    if (Number.isNaN(year) || !year || year > 2021) {
      this.setState({
        message: 'Enter the year that you are Born',
        isValidYear: false,
      })
    } else {
      const yearDiff = 2021 - year
      if (yearDiff > 1) {
        this.setState({
          message: `You are ${yearDiff} years old by the end of 2021`,
          isValidYear: true,
        })
      } else {
        this.setState({
          message: `You are 1 year old by the end of 2021`,
          isValidYear: true,
        })
      }
    }
  }

  render() {
    const {inputYear, isValidYear, message} = this.state
    return (
      <div className="app-container">
        <div className="age-calculator-container">
          <div className="age-calculator-card">
            <h1 className="heading">Age Calculator</h1>
            <div className="input-age-container">
              <input
                className="input-age"
                onChange={this.onChangeInput}
                value={inputYear}
                placeholder="Enter the year that you are born"
              />
              <p className="invalid-message">{!isValidYear && message}</p>
            </div>
            <p className="valid-message">{isValidYear && message}</p>
            <button
              className="age-calculate-button"
              onClick={this.calculateAge}
            >
              Calculate
            </button>
          </div>
          <img
            className="persons-image"
            src="https://assets.ccbp.in/frontend/react-js/age-calculater-persons-img.png"
            alt="age calculator persons"
          />
        </div>
      </div>
    )
  }
}
export default AgeCalculator
