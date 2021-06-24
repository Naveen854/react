import './index.css'

const RepsitoryItem = props => {
  const {repoData} = props
  const {name, avatarUrl, forksCount, issuesCount, starsCount} = repoData
  return (
    <li className="repository-item">
      <img className="repository-image" src={avatarUrl} alt={name} />
      <h2 className="repository-name">{name}</h2>
      <p className="stars-count">
        <img
          className="star-image"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
        />
        {starsCount} stars
      </p>
      <p className="forks-count">
        <img
          className="fork-image"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png "
          alt="forks"
        />
        {forksCount} forks
      </p>
      <p className="issues-count">
        <img
          className="issue-image"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open-issues"
        />
        {issuesCount} open issues
      </p>
    </li>
  )
}

export default RepsitoryItem
