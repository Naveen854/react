import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  constructor(props) {
    super(props)
    this.suggestionsList = props.suggestionsList
    this.state = {searchInput: '', suggestionsList: this.suggestionsList}
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  updateSuggestion = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {searchInput, suggestionsList} = this.state
    const filteredSearchSuggestions = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )
    console.log(searchInput, filteredSearchSuggestions)
    return (
      <div className="app-container">
        <div className="google-suggestions-container">
          <img
            className="google-logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
          <div className="search-container">
            <div className="search-input-container">
              <img
                className="search-icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
              />
              <input
                onChange={this.onChangeSearchInput}
                className="search-input"
                type="search"
                value={searchInput}
              />
            </div>
            <ul className="search-suggestions-container">
              {filteredSearchSuggestions.map(eachSuggestion => (
                <SuggestionItem
                  suggestionData={eachSuggestion}
                  key={eachSuggestion.id}
                  updateSuggestion={this.updateSuggestion}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
