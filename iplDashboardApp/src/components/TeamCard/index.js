import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamData} = props
  const {id, name, teamImageUrl} = teamData
  return (
    <div>
      <Link to={`/team-matches/${id}`} className="link-item">
        <img className="team-logo" src={teamImageUrl} alt={name} />
        <p className="team-name">{name}</p>
      </Link>
    </div>
  )
}
export default TeamCard
