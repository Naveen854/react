import './index.css'

const MatchCard = props => {
  const {matchData} = props
  const getMatchStatusClassName = matchStatus => {
    if (matchStatus === 'Won') {
      return 'match-won'
    }
    return 'match-lost'
  }
  const matchStatusClassName = `match-status ${getMatchStatusClassName(
    matchData.match_status,
  )}`
  return (
    <li className="match-item">
      <img
        src={matchData.competing_team_logo}
        alt={matchData.competing_team}
        className="competing-team-logo"
      />
      <p className="competing-team">{matchData.competing_team}</p>
      <p className="result">{matchData.result}</p>
      <p className={matchStatusClassName}>{matchData.match_status}</p>
    </li>
  )
}
export default MatchCard
