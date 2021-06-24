// Write your code here
import './index.css'

const DenominationIem = props => {
  const {denominationData, deductBalance} = props
  const {value} = denominationData
  const deductAmount = () => deductBalance(value)
  return (
    <li className="denomination-item">
      <button className="denomination-item" onClick={deductAmount}>
        {value}
      </button>
    </li>
  )
}
export default DenominationIem
