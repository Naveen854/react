import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  constructor(props) {
    super(props)
    this.denominationsList = props.denominationsList
    this.state = {balance: 2000}
  }

  deductBalance = amount => {
    this.setState(prevState => ({balance: prevState.balance - amount}))
  }

  render() {
    const {balance} = this.state
    return (
      <div className="app-container">
        <div className="cash-withdrawal-container">
          <div className="user-container">
            <div className="logo">P</div>
            <p className="user-name">Naveen Pathra</p>
          </div>
          <div className="balance-container">
            <p className="balance-text">Your Balance</p>
            <p className="balance-amount">
              {balance}
              <br />
              <span className="caption-text">in Rupees</span>
            </p>
          </div>
          <div className="withdrawal-section">
            <p className="withdraw">Withdraw</p>
            <p className="choosing-denominations-text">
              CHOOSE SUM (IN RUPEES)
            </p>
            <ul className="denominations-container">
              {this.denominationsList.map(eachDenomination => (
                <DenominationItem
                  denominationData={eachDenomination}
                  key={eachDenomination.id}
                  deductBalance={this.deductBalance}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
