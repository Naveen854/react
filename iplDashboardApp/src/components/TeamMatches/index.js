import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    recentMatches: [],
    latestMatchDetails: [],
    teamBannerUrl: '',
    isLoading: true,
    teamId: '',
  }

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const recentMatches = data.recent_matches
    const latestMatchDetails = data.latest_match_details
    const teamBannerUrl = data.team_banner_url
    // console.log(recentMatches, latestMatchDetails, teamBannerUrl)
    this.setState({
      recentMatches,
      latestMatchDetails,
      teamBannerUrl,
      isLoading: false,
      teamId: id,
    })
  }

  renderRecentMatchesList = () => {
    const {recentMatches} = this.state

    return (
      <ul className="recent-matches-list">
        {recentMatches.map(recentMatch => (
          <MatchCard matchData={recentMatch} key={recentMatch.id} />
        ))}
      </ul>
    )
  }

  renderTeamMatches = () => {
    const {teamBannerUrl, latestMatchDetails, teamId} = this.state

    return (
      <div className="team-matches-container">
        <img src={teamBannerUrl} alt={teamId} className="team-banner-img" />
        <LatestMatch latestMatchData={latestMatchDetails} />
        {this.renderRecentMatchesList()}
      </div>
    )
  }

  renderLoader = () => (
    <div testid="loader" className="loader-container">
      <Loader type="Oval" color="#ffffff" height="50" />
    </div>
  )

  getTeamBgColor = () => {
    const {teamId} = this.state
    return {
      RCB: 'rcb',
      KKR: 'kkr',
      KXP: 'kxp',
      CSK: 'csk',
      RR: 'rr',
      MI: 'mi',
      SH: 'srh',
      DC: 'dc',
    }[teamId]
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className={`team-matches-container ${this.getTeamBgColor()}`}>
        {isLoading ? this.renderLoader() : this.renderTeamMatches()}
      </div>
    )
  }
}

export default TeamMatches
