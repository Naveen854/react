import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  constructor(props) {
    super(props)
    this.destinationData = props.initialDestinationsList
    this.state = {searchInput: '', destinationList: this.destinationData}
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value.toLowerCase(),
    })
  }

  render() {
    const {searchInput, destinationList} = this.state
    const searchResults = destinationList.filter(eachDestination =>
      eachDestination.name.toLowerCase().includes(searchInput),
    )
    console.log(searchResults)
    return (
      <div className="app-container">
        <header className="app-header">
          <h1 className="heading">Destination Search</h1>
          <div className="input-container">
            <input
              className="destination-search"
              type="search"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
            <img
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
            />
          </div>
        </header>

        <ul className="destination-cards-container">
          {searchResults.map(eachDestination => (
            <DestinationItem
              destinationDetails={eachDestination}
              key={eachDestination.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
