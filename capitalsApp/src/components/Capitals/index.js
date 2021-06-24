import {useState} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

const Capitals = () => {
  const [country, setCountry] = useState('India')

  const onChangeValue = event => {
    const id = event.target.value
    const filteredItem = countryAndCapitalsList.find(
      eachItem => eachItem.id === id,
    )
    setCountry(filteredItem.country)
  }

  return (
    <div className="app-container">
      <div className="capitals-card">
        <h1 className="heading">Countries And Capitals</h1>
        <form className="from-control">
          <select id="capitals" onChange={onChangeValue}>
            {countryAndCapitalsList.map(eachItem => (
              <option key={eachItem.id} value={eachItem.id}>
                {eachItem.capitalDisplayText}
              </option>
            ))}
          </select>
          <label className="form-label" htmlFor="capitals">
            is capital of which country?
          </label>
        </form>
        <p className="capital-text">{country}</p>
      </div>
    </div>
  )
}

export default Capitals
