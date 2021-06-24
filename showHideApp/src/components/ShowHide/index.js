import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isFirstNameHidden: false, isLastNameHidden: false}

  showHideFirstName = () => {
    this.setState(prevState => ({
      isFirstNameHidden: !prevState.isFirstNameHidden,
    }))
  }

  showHideLastName = () => {
    this.setState(prevState => ({
      isLastNameHidden: !prevState.isLastNameHidden,
    }))
  }

  nameCard = name => <div className="name-card">{name}</div>

  showHideNamesContainer = property => {
    const {nameType, isNameHidden, name, actionFunction} = property
    return (
      <div className="name-action-container">
        <button className="button" onClick={actionFunction}>
          Show/Hide {nameType}
        </button>
        {isNameHidden ? this.nameCard(name) : null}
      </div>
    )
  }

  render() {
    const {isFirstNameHidden, isLastNameHidden} = this.state
    return (
      <div className="show-hide-names-container">
        {this.showHideNamesContainer({
          nameType: 'FirstName',
          isNameHidden: isFirstNameHidden,
          name: 'Joe',
          actionFunction: this.showHideFirstName,
        })}
        {this.showHideNamesContainer({
          nameType: 'LastName',
          isNameHidden: isLastNameHidden,
          name: 'Jonas',
          actionFunction: this.showHideLastName,
        })}
      </div>
    )
  }
}

export default ShowHide
