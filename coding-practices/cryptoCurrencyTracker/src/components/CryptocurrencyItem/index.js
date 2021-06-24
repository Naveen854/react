import './index.css'

const CryptocurrencyItem = props => {
  const {currencyData} = props
  const {currencyLogoUrl, currencyName, usdValue, euroValue} = currencyData
  return (
    <li className="cryptocurrency-item">
      <div className="currency-details">
        <img
          src={currencyLogoUrl}
          alt={`${currencyName}`}
          className="currency-img"
        />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="converted-values-container">
        <p className="usd-value">{usdValue}</p>
        <p className="euro-value">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
