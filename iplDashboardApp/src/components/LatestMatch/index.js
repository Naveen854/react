import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props

  return (
    <div className="latest-match-container">
      <h1 className="latest-match-heading">Latest Matches</h1>
      <div className="latest-match-card">
        <div className="latest-match-details-logo-container">
          <div className="latest-match-details-1">
            <p className="latest-match-team-name">
              {latestMatchData.competing_team}
            </p>
            <p className="latest-match-date">{latestMatchData.date}</p>
            <p className="match-details">{latestMatchData.venue}</p>
            <p className="match-details">{latestMatchData.result}</p>
          </div>
          <img
            src={latestMatchData.competing_team_logo}
            className="latest-match-team-logo"
            alt={`latest-${latestMatchData.competing_team}`}
          />
        </div>
        <hr className="separator" />
        <div className="latest-match-details-2">
          <p className="latest-match-details-label">First Innings</p>
          <p className="latest-match-details-value">
            {latestMatchData.first_innings}
          </p>
          <p className="latest-match-details-label">Second Innings</p>
          <p className="latest-match-details-value">
            {latestMatchData.second_innings}
          </p>
          <p className="latest-match-details-label">Man Of The Match</p>
          <p className="latest-match-details-value">
            {latestMatchData.man_of_the_match}
          </p>
          <p className="latest-match-details-label">Umpires</p>
          <p className="latest-match-details-value">
            {latestMatchData.umpires}
          </p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
