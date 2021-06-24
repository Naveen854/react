import './index.css'

const Login = props => {
  const {changeLoginState} = props
  const changeState = () => {
    changeLoginState()
  }
  return (
    <button className="button" type="submit" onClick={changeState}>
      Login
    </button>
  )
}

export default Login
