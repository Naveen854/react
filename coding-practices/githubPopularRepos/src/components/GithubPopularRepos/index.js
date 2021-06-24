import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {repositoryData: [], selectedLanguage: '', isLoading: true}

  componentDidMount() {
    this.getReposData('ALL')
  }

  getReposData = async selectedLanguage => {
    const response = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${selectedLanguage}`,
    )
    const data = await response.json()
    // console.log(data)
    const popularRepos = data.popular_repos
    const repositoryData = popularRepos.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      avatarUrl: eachItem.avatar_url,
      forksCount: eachItem.forks_count,
      issuesCount: eachItem.issues_count,
      starsCount: eachItem.stars_count,
    }))
    this.setState({repositoryData, isLoading: false, selectedLanguage})
  }

  renderGithubRepos = () => {
    const {repositoryData} = this.state
    return (
      <ul className="github-repo-items-container">
        {repositoryData.map(eachItem => (
          <RepositoryItem repoData={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  onChangeLanguage = selectedLanguage => {
    this.setState({isLoading: true})
    this.getReposData(selectedLanguage)
  }

  renderLanguageFilterItems = () => {
    const {selectedLanguage} = this.state
    return languageFiltersData.map(eachItem => (
      <LanguageFilterItem
        key={eachItem.id}
        languageData={eachItem}
        selectedLanguage={selectedLanguage}
        changeLanguage={this.onChangeLanguage}
      />
    ))
  }

  render() {
    const {isLoading} = this.state
    // console.log(language)
    return (
      <div className="github-repos-container">
        <header className="github-repos-header-section">
          <h1 className="heading">Popular</h1>
          <div className="language-filter-items-container">
            {this.renderLanguageFilterItems()}
          </div>
        </header>
        {isLoading ? this.renderLoader() : this.renderGithubRepos()}
      </div>
    )
  }
}

export default GithubPopularRepos
