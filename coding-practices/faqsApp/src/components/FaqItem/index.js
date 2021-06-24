import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  constructor(props) {
    super(props)
    this.faqData = props.faqData
    this.state = {isAnswerShown: false}
  }

  getImageElement = imageType => {
    const imgUrl =
      imageType === 'plus'
        ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    return <img className="plus-minus-image" src={imgUrl} alt={imageType} />
  }

  showAnswer = () => {
    this.setState(prevState => ({isAnswerShown: !prevState.isAnswerShown}))
  }

  getAnswerElement = answerText => (
    <div className="answer-container">
      <hr />
      <p className="answer">{answerText}</p>
    </div>
  )

  render() {
    const {isAnswerShown} = this.state
    const {questionText, answerText} = this.faqData
    return (
      <div className="faq-item-container">
        <div className="question-button-container">
          <h1 className="question">{questionText}</h1>
          <button className="button" onClick={this.showAnswer}>
            {isAnswerShown
              ? this.getImageElement('minus')
              : this.getImageElement('plus')}
          </button>
        </div>
        {isAnswerShown ? this.getAnswerElement(answerText) : null}
      </div>
    )
  }
}

export default FaqItem
