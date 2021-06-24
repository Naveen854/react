import './index.css'

const Logout = props => {
  const {changeLoginState} = props
  const changeState = () => {
    changeLoginState()
  }
  return (
    <button className="button" type="submit" onClick={changeState}>
      Logout
    </button>
  )
}

export default Logout
