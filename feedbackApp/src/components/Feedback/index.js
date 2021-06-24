import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  constructor(props) {
    super(props)
    const {emojis, loveEmojiUrl} = props.feedbackData
    this.state = {
      initialEmojisData: emojis,
      isEmojiImageClicked: false,
      loveEmojiUrl,
    }
  }

  onClickEmoji = () => {
    this.setState({isEmojiImageClicked: true})
  }

  getEmojiFeedback = () => {
    const {loveEmojiUrl} = this.state
    return (
      <div className="feedback-container">
        <img className="love-emoji" src={loveEmojiUrl} alt="love emoji" />
        <h1 className="thank-you-text">Thank you!</h1>
        <p className="feedback-summary">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  getEmojiItems = emojisData => (
    <div className="feedback-container">
      <h1 className="heading">
        How satisfied are you with our customer support performance?
      </h1>
      <ul className="feedback-emojis-container">
        {emojisData.map(eachData => (
          <li className="emoji-card" key={eachData.id}>
            <button className="emoji-button" onClick={this.onClickEmoji}>
              <img
                className="emoji-image"
                src={eachData.imageUrl}
                alt="emoji"
              />
            </button>
            <p className="emoji-name">{eachData.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )

  render() {
    const {initialEmojisData, isEmojiImageClicked, loveEmojiUrl} = this.state
    console.log(initialEmojisData)
    return (
      <div className="app-container">
        {isEmojiImageClicked
          ? this.getEmojiFeedback()
          : this.getEmojiItems(initialEmojisData)}
      </div>
    )
  }
}

export default Feedback
