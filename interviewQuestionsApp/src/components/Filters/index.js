import './index.css'

const Filters = props => {
  const {categoryData, levelsData, onChangeLanguage, onChangeLevel} = props

  const changeLanguage = event => {
    onChangeLanguage(event.target.value)
  }

  const changeLevel = event => {
    onChangeLevel(event.target.value)
  }

  return (
    <div className="filters-container">
      <div className="language-filter-container">
        <label htmlFor="language">Language</label>
        <select className="select-item" id="language" onChange={changeLanguage}>
          <optgroup>
            {categoryData.map(eachItem => (
              <option label={eachItem.language} key={eachItem.id}>
                {eachItem.language}
              </option>
            ))}
          </optgroup>
        </select>
      </div>
      <div className="difficulty-level-filter-container">
        <label htmlFor="difficultyLevel">Level</label>
        <select
          className="select-item"
          id="difficultyLevel"
          onChange={changeLevel}
        >
          <optgroup>
            {levelsData.map(eachItem => (
              <option label={eachItem.level} key={eachItem.id}>
                {eachItem.level}
              </option>
            ))}
          </optgroup>
        </select>
      </div>
    </div>
  )
}
export default Filters
