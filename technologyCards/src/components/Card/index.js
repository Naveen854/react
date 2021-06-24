import './index.css'
// Write your code here.

const Card = props => {
  const {cardData} = props
  const {title, description, imgUrl, className} = cardData
  return (
    <div className={`app-cards-container ${className}`}>
      <div>
        <h1 className="card-heading">{title}</h1>
        <p className="card-description">{description}</p>
      </div>
      <img className="card-image" src={imgUrl} />
    </div>
  )
}
export default Card
