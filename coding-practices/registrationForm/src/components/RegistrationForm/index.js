import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameFilled: true,
    lastNameFilled: true,
    showSuccess: false,
  }

  OnSubmitAnotherOne = () =>
    this.setState({
      firstName: '',
      lastName: '',
      firstNameFilled: true,
      lastNameFilled: true,
      showSuccess: false,
    })

  onSubmitForm = event => {
    event.preventDefault()
  }

  onSubmitDetails = () => {
    const {firstName, lastName} = this.state
    if (firstName === '') {
      this.setState({firstNameFilled: false})
    }
    if (firstName !== '') {
      this.setState({firstNameFilled: true})
    }
    if (lastName === '') {
      this.setState({lastNameFilled: false})
    }
    if (lastName !== '') {
      this.setState({lastNameFilled: true})
    }
    if (firstName !== '' && lastName !== '') {
      this.setState({showSuccess: true})
    }
  }

  onBlurLastName = event => {
    if (event.target.value === '') {
      this.setState({lastNameFilled: false})
    } else {
      this.setState({lastNameFilled: true})
    }
  }

  onBlurFirstName = event => {
    if (event.target.value === '') {
      this.setState({firstNameFilled: false})
    } else {
      this.setState({firstNameFilled: true})
    }
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  renderFirstNameField = () => {
    const {firstName, firstNameFilled} = this.state
    const inputClassName = firstNameFilled ? '' : 'wrong'
    return (
      <>
        <label className="input-label" htmlFor="firstname">
          FIRST NAME
        </label>
        <input
          id="firstname"
          className={`firstname-input-filed ${inputClassName}`}
          type="text"
          value={firstName}
          placeholder="First name"
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
        {firstNameFilled ? null : <p className="error-message">Required</p>}
      </>
    )
  }

  renderLastNameField = () => {
    const {lastName, lastNameFilled} = this.state
    // console.log(lastName, lastNameFilled)
    const inputClassName = lastNameFilled ? '' : 'wrong'
    return (
      <>
        <label className="input-label" htmlFor="lastname">
          LAST NAME
        </label>
        <input
          id="lastname"
          className={`lastname-input-filed ${inputClassName}`}
          type="text"
          value={lastName}
          placeholder="Last name"
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
        {lastNameFilled ? null : <p className="error-message">Required</p>}
      </>
    )
  }

  renderForm = () => (
    <form className="form-container" onSubmit={this.onSubmitForm}>
      <div className="input-container">{this.renderFirstNameField()}</div>
      <div className="input-container">{this.renderLastNameField()}</div>
      <button
        type="button"
        className="submit-button"
        onClick={this.onSubmitDetails}
      >
        Submit
      </button>
    </form>
  )

  renderSuccessCard = () => (
    <div className="success-card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-img"
      />
      <p className="submit-response">Submitted Successfully</p>
      <button
        type="button"
        className="submit-another-response-button"
        onClick={this.OnSubmitAnotherOne}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {showSuccess} = this.state
    return (
      <div className="registration-form-container">
        <h1 className="heading">Registration</h1>
        {showSuccess ? this.renderSuccessCard() : this.renderForm()}
      </div>
    )
  }
}

export default RegistrationForm
