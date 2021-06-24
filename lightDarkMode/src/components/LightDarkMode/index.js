import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isLightMode: false}

  changeMode = () => {
    this.setState(prevState => ({isLightMode: !prevState.isLightMode}))
  }

  render() {
    const {isLightMode} = this.state

    const lightDarkModeContainer = (darkMode, lightMode, modeText) => (
      <div className={`dark-light-mode-container ${darkMode}`}>
        <h1 className="heading">Click To Change Mode</h1>
        <button className={`button ${lightMode}`} onClick={this.changeMode}>
          {modeText} Mode
        </button>
      </div>
    )

    return isLightMode
      ? lightDarkModeContainer('light-mode', 'dark-mode', 'Dark')
      : lightDarkModeContainer('dark-mode', 'light-mode', 'Light')
  }
}

export default LightDarkMode
