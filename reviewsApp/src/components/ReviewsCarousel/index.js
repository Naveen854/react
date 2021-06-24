import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    index: 0,
  }

  onIncrement = () => {
    const {reviewsData} = this.props
    const maxIndex = reviewsData.length - 1
    this.setState(prevState => ({
      index: prevState.index === maxIndex ? maxIndex : prevState.index + 1,
    }))
  }

  onDecrement = () => {
    this.setState(prevState => ({
      index: prevState.index === 0 ? 0 : prevState.index - 1,
    }))
  }

  renderReview = () => {
    const {index} = this.state
    const {reviewsData} = this.props
    const {imgUrl, username, companyName, description} = reviewsData[index]
    return (
      <div className="review-data-container">
        <img src={imgUrl} alt={`${username}-avatar`} />
        <p className="username">{username}</p>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  render() {
    // console.log(index, username, companyName)
    return (
      <div className="reviews-container">
        <h1 className="heading">Reviews</h1>
        <div className="carousel-container">
          <div>
            <button
              type="button"
              testid="leftArrow"
              onClick={this.onDecrement}
              className="arrow-button"
            >
              <img
                className="arrow-image"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
          </div>
          {this.renderReview()}
          <div>
            <button
              type="button"
              testid="rightArrow"
              onClick={this.onIncrement}
              className="arrow-button"
            >
              <img
                className="arrow-image"
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
