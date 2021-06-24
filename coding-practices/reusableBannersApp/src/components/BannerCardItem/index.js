import './index.css'
// Write your code here.
const BannerCardItem = props => {
  const {bannerCardData} = props
  const {headerText, description, className} = bannerCardData
  return (
    <div className={`banner-card-container ${className}`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="show-more-button">Show More</button>
      </div>
    </div>
  )
}
export default BannerCardItem
