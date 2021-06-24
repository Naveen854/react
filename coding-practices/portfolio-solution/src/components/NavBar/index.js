import {Component} from 'react'

import './index.css'

class NavBar extends Component {
  renderNavItemsList = () => {
    const {navBarItems, activeNavBarItem, changeActiveNavBarItem} = this.props

    return navBarItems.map(navItem => {
      const onClickNavBarItem = () => changeActiveNavBarItem(navItem.name)
      const buttonClassName =
        activeNavBarItem === navItem.name ? 'active-item' : ''
      return (
        <li
          className={`nav-item ${buttonClassName}`}
          key={navItem.id}
          onClick={onClickNavBarItem}
        >
          <img
            className="item-image"
            src={navItem.iconUrl}
            alt={navItem.name}
          />
          <p className="item-name">{navItem.name}</p>
        </li>
      )
    })
  }

  render() {
    return (
      <nav className="navbar">
        <img
          className="profile-image"
          src="https://assets.ccbp.in/frontend/react-js/portfolio-profile-img.png"
          alt="profile"
        />
        <ul className="nav-items-list">{this.renderNavItemsList()}</ul>
      </nav>
    )
  }
}

export default NavBar
