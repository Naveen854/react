import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {lettersCount: 0, searchInput: ''}

  onChangeInInput = event => {
    this.setState({
      lettersCount: event.target.value.length,
      searchInput: event.target.value,
    })
  }

  render() {
    const {lettersCount, searchInput} = this.state
    return (
      <div className="app-container">
        <img
          className="calculator-image"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="calculator"
        />
        <div className="letter-count-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <form className="form">
            <label htmlFor="inputLetter">Enter the phrase</label>
            <input
              id="inputLetter"
              className="input"
              value={searchInput}
              onChange={this.onChangeInInput}
              placeholder="Enter the phrase"
            />
          </form>
          <div className="letters-count">No.of letters: {lettersCount}</div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
