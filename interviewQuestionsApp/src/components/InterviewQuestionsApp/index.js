import {Component} from 'react'
import InterviewQuestion from '../InterviewQuestion'
import Filters from '../Filters'
import './index.css'

class InterviewQuestionsApp extends Component {
  state = {questionsData: [], language: 'ALL', level: 'ALL'}

  onChangeLanguage = language => {
    this.setState({language})
  }

  onChangeLevel = level => {
    this.setState({level})
  }

  getFilteredData = (language, level) => {
    const {questionsData} = this.props
    let filteredData = null
    if (language === 'ALL' && level !== 'ALL') {
      filteredData = questionsData.filter(
        eachItem => eachItem.difficultyLevel === level,
      )
      return filteredData
    }
    if (language !== 'ALL' && level === 'ALL') {
      filteredData = questionsData.filter(
        eachItem => eachItem.language === language,
      )
      return filteredData
    }
    if (language !== 'ALL' && level !== 'ALL') {
      filteredData = questionsData.filter(
        eachItem =>
          eachItem.language === language && eachItem.difficultyLevel === level,
      )
      return filteredData
    }
    return questionsData
  }

  renderFiltersSection = () => {
    const {categoryData, levelsData} = this.props
    return (
      <Filters
        categoryData={categoryData}
        levelsData={levelsData}
        onChangeLanguage={this.onChangeLanguage}
        onChangeLevel={this.onChangeLevel}
      />
    )
  }

  renderInterviewQuestionList = () => {
    const {language, level} = this.state
    const filteredData = this.getFilteredData(language, level)
    //  console.log(language, level)
    // console.log(filteredData)
    return (
      <ul className="interview-question-container">
        {filteredData.map(eachItem => (
          <InterviewQuestion key={eachItem.id} data={eachItem} />
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div className="interview-questions-app-container">
        <div className="header-section">
          <h1 className="heading">
            30 Seconds
            <br /> of Interviews
          </h1>
          <img
            className="header-img"
            src="https://assets.ccbp.in/frontend/react-js/interview-questions-img.png"
            alt="interview questions"
          />
        </div>
        <div className="body-section">
          {this.renderFiltersSection()}
          {this.renderInterviewQuestionList()}
        </div>
      </div>
    )
  }
}
export default InterviewQuestionsApp
