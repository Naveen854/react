import {Component} from 'react'
import './index.css'

class InterviewQuestion extends Component {
  state = {isMessageHidden: true}

  onShowMessage = () => {
    this.setState(prevState => ({isMessageHidden: !prevState.isMessageHidden}))
  }

  getLevelClassName = level =>
    ({EASY: 'easy', MEDIUM: 'medium', HARD: 'hard'}[level])

  getLanguageClassName = language =>
    ({HTML: 'html', JAVASCRIPT: 'javascript', CSS: 'css'}[language])

  render() {
    const {isMessageHidden} = this.state
    const {data} = this.props
    const {language, difficultyLevel, questionText, answerText} = data
    const imageUrl = isMessageHidden
      ? 'https://assets.ccbp.in/frontend/react-js/down-arrow.png'
      : 'https://assets.ccbp.in/frontend/react-js/up-arrow.png'
    const imageAltText = isMessageHidden ? 'down arrow' : 'up arrow'
    return (
      <li className="interview-question-item">
        <div className="language-difficulty-level-container">
          <span className={`language ${this.getLanguageClassName(language)}`}>
            {language}
          </span>
          <span className={`level ${this.getLevelClassName(difficultyLevel)}`}>
            {difficultyLevel}
          </span>
        </div>
        <div className="interview-question-details-container">
          <h1 className="question">{questionText}</h1>
          <button
            type="button"
            className="show-button"
            onClick={this.onShowMessage}
          >
            {isMessageHidden ? 'Show' : 'Hide'}
            <img className="arrow-img" src={imageUrl} alt={imageAltText} />
          </button>
          {isMessageHidden ? null : <p className="answer">{answerText}</p>}
        </div>
      </li>
    )
  }
}
export default InterviewQuestion
