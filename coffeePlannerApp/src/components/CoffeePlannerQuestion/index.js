import {Component} from 'react'

import QuestionOption from '../QuestionOption'

import './index.css'

class CoffeePlannerQuestion extends Component {
  render() {
    const {
      getSelectedOption,
      questionData,
      updateSelectedCoffeePlan,
    } = this.props
    const {questionTitle, optionsData, questionType} = questionData
    const selectedOption = getSelectedOption(questionType)

    return (
      <li className="coffee-planner-question-item">
        <h1 className="question">{questionTitle}</h1>
        <ul className="options-list-container">
          {optionsData.map(questionOption => (
            <QuestionOption
              optionData={questionOption}
              key={questionOption.id}
              questionType={questionType}
              selectedOption={selectedOption}
              updateSelectedCoffeePlan={updateSelectedCoffeePlan}
            />
          ))}
        </ul>
      </li>
    )
  }
}

export default CoffeePlannerQuestion
