import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

// const CryptocurrenciesList = props => {
//   const {cryptoCurrenciesData} = props
//   return (
//     <ul className="cryptocurrencies-list">
//       {cryptoCurrenciesData.map(eachData => (
//         <CryptocurrencyItem key={eachData.id} currencyData={eachData} />
//       ))}
//     </ul>
//   )
// }

const CryptocurrenciesList = props => {
  const {cryptoCurrenciesData} = props
  return (
    <ul className="cryptocurrencies-list">
      <li className="list-header">
        <h1 className="coin-type">Coin Type</h1>
        <div className="conversion-headers">
          <h1 className="usd">Usd</h1>
          <h1 className="euro">Euro</h1>
        </div>
      </li>
      {cryptoCurrenciesData.map(eachData => (
        <CryptocurrencyItem key={eachData.id} currencyData={eachData} />
      ))}
    </ul>
  )
}

export default CryptocurrenciesList
