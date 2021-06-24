import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails
  return (
    <li className="destination-item-container">
      <img className="destination-image" src={imgUrl} />
      <p className="destination-name">{name}</p>
    </li>
  )
}

export default DestinationItem
