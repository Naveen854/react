import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  LoginContainer,
  FormContainer,
  FormImg,
  InputLabel,
  CustomInput,
  ErrorMsg,
  CustomContainer,
  LoginBtn,
  ShowPasswordLabel,
} from './styledComponents'
import AppContext from '../../context/AppContext'
import {LOGO_IMG_LIGHT, LOGO_IMG_DARK} from '../../constants/appConstants'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    showPassword: false,
    errorMsg: '',
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMsg, showSubmitError: true})
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const requestUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify({username, password}),
    }

    const response = await fetch(requestUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  render() {
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }

    const {
      username,
      password,
      errorMsg,
      showSubmitError,
      showPassword,
    } = this.state
    return (
      <AppContext.Consumer>
        {({isDarkTheme}) => {
          const logoImgSrc = isDarkTheme ? LOGO_IMG_DARK : LOGO_IMG_LIGHT
          return (
            <LoginContainer isdarktheme={isDarkTheme.toString()}>
              <FormContainer
                onSubmit={this.onSubmitLoginForm}
                isdarktheme={isDarkTheme.toString()}
              >
                <FormImg src={logoImgSrc} alt="website logo" />
                <CustomContainer>
                  <InputLabel
                    isdarktheme={isDarkTheme.toString()}
                    htmlFor="username"
                  >
                    USERNAME
                  </InputLabel>
                  <CustomInput
                    id="username"
                    type="text"
                    value={username}
                    onChange={this.onChangeUsername}
                    isdarktheme={isDarkTheme.toString()}
                    placeholder="Username"
                  />
                </CustomContainer>
                <CustomContainer>
                  <InputLabel
                    isdarktheme={isDarkTheme.toString()}
                    htmlFor="password"
                  >
                    PASSWORD
                  </InputLabel>
                  <CustomInput
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={this.onChangePassword}
                    isdarktheme={isDarkTheme.toString()}
                    placeholder="Password"
                  />
                </CustomContainer>
                <CustomContainer>
                  <input
                    id="showPassword"
                    type="checkbox"
                    checked={showPassword}
                    onChange={this.onClickShowPassword}
                  />
                  <ShowPasswordLabel
                    isdarktheme={isDarkTheme.toString()}
                    htmlFor="showPassword"
                  >
                    show password
                  </ShowPasswordLabel>
                </CustomContainer>

                <LoginBtn isdarktheme={isDarkTheme.toString()} type="submit">
                  Login
                </LoginBtn>
                {showSubmitError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
              </FormContainer>
            </LoginContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default LoginForm
