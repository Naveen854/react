import './index.css'

const TabItem = props => {
  const {tabItemData, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabItemData
  const changeActiveTab = () => {
    setActiveTabId(tabId)
  }

  const btnClassName = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li className="tab-item">
      <button type="button" onClick={changeActiveTab} className={btnClassName}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
