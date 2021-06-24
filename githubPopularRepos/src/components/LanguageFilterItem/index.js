import './index.css'

const LanguageFiltersItem = props => {
  const {languageData, changeLanguage, selectedLanguage} = props
  const {id, language} = languageData
  //   console.log(id, language)
  const btnClassName = selectedLanguage === id ? 'selected' : ''
  const onLanguageChange = () => {
    changeLanguage(id)
  }
  return (
    <button
      type="button"
      className={`language-filter-item ${btnClassName}`}
      onClick={onLanguageChange}
    >
      {language}
    </button>
  )
}

export default LanguageFiltersItem
