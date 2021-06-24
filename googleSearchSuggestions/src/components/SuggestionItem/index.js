import './index.css'

const SuggestionItem = props => {
  const {suggestionData, updateSuggestion} = props
  const {suggestion} = suggestionData
  const suggestionUpdate = () => {
    updateSuggestion(suggestion)
  }
  return (
    <li className="suggestion-item">
      <p>{suggestion}</p>
      <button className="suggestion-button" onClick={suggestionUpdate}>
        <img
          className="suggestion-icon"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow left"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
