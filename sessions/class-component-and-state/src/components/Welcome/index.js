import {Component} from 'react'

class Welcome extends Component {
  handleClick = () => {
    console.log(this)
  }
  render() {
    return <button onClick={this.handleClick()}>Welcome Button</button>
  }
}

export default Welcome
