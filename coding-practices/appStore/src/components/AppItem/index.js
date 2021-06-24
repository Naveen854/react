import './index.css'

const AppItem = props => {
  const {appItemData} = props
  const {imageUrl, appName} = appItemData
  return (
    <li className="app-item-container">
      <img src={imageUrl} alt={appName} className="app-item-img" />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
