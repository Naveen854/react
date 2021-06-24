import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {currenciesData: [], isPageLoading: true}

  componentDidMount() {
    this.getCryptoCurrenciesData()
  }

  getCryptoCurrenciesData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const modifiedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyLogoUrl: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
    }))

    this.setState({currenciesData: modifiedData, isPageLoading: false})
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderBody = () => {
    const {currenciesData} = this.state
    return (
      <div className="cryptocurrency-tracker-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="Cryptocurrency Tracker"
          className="cryptocurrency-bg-img"
        />
        <CryptocurrenciesList cryptoCurrenciesData={currenciesData} />
      </div>
    )
  }

  render() {
    const {isPageLoading} = this.state
    return (
      <div className="app-container">
        {isPageLoading ? this.renderLoader() : this.renderBody()}
      </div>
    )
  }
}

export default CryptocurrencyTracker
