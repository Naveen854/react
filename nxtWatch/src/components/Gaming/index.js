import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'
import SideBar from '../Sidebar'
import Banner from '../Banner'
import FailureView from '../FailureView'
import StyledLoader from '../StyledLoader'
import AppContext from '../../context/AppContext'
import {
  ActiveTabIcon,
  GamingVideoListContainer,
  GamingVideoItemContainer,
  StyledLink,
  GamingVideoDetailsContainer,
  VideoStatsText,
  GamingVideoImg,
} from './styledComponents'

import {
  ActiveTabContainer,
  BannerActiveTabContentContainer,
  ActiveTabContentAndVideosContainer,
  ActiveTabHeader,
  ActiveTabTitle,
  VideoTitle,
} from '../../commonStyles/ActiveTabStyles'

import {RetryBtn} from '../../commonStyles/FailureViewStyles'
import {apiStatusConstants} from '../../constants/appConstants'

class Gaming extends Component {
  isFullyMounted = false

  state = {
    gamingVideosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.isMounted = true
    this.fetchGamingVideosList()
  }

  componentWillUnmount() {
    this.isMounted = false
  }

  set isMounted(value) {
    this.isFullyMounted = value
  }

  get isMounted() {
    return this.isFullyMounted
  }

  fetchGamingVideosList = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const token = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/gaming`
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'applications/json',
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok && this.isMounted) {
      const gamingVideosList = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        gamingVideosList,
        apiStatus: apiStatusConstants.success,
      })
    } else if (this.isMounted) {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderFailureView = () => (
    <FailureView>
      <RetryBtn onClick={this.fetchGamingVideosList}>Retry</RetryBtn>
    </FailureView>
  )

  renderGamingVideosList = () => {
    const {gamingVideosList} = this.state
    return (
      <GamingVideoListContainer>
        {gamingVideosList.map(eachItem => {
          const {id, title, thumbnailUrl, viewCount} = eachItem
          return (
            <StyledLink to={`/videos/${id}`} key={id}>
              <AppContext.Consumer>
                {({isDarkTheme}) => (
                  <GamingVideoItemContainer>
                    <GamingVideoImg src={thumbnailUrl} alt="video thumbnail" />
                    <GamingVideoDetailsContainer>
                      <VideoTitle isdarktheme={isDarkTheme.toString()}>
                        {title}
                      </VideoTitle>
                      <VideoStatsText isdarktheme={isDarkTheme.toString()}>
                        {viewCount} Watching Worldwide
                      </VideoStatsText>
                    </GamingVideoDetailsContainer>
                  </GamingVideoItemContainer>
                )}
              </AppContext.Consumer>
            </StyledLink>
          )
        })}
      </GamingVideoListContainer>
    )
  }

  renderActiveTabContent = () => (
    <>
      <Banner />
      <AppContext.Consumer>
        {({isDarkTheme}) => (
          <ActiveTabContentAndVideosContainer>
            <ActiveTabHeader isdarktheme={isDarkTheme.toString()}>
              <ActiveTabIcon isdarktheme={isDarkTheme.toString()} />
              <ActiveTabTitle isdarktheme={isDarkTheme.toString()}>
                &nbsp;Gaming
              </ActiveTabTitle>
            </ActiveTabHeader>
            {this.renderGamingVideosList()}
          </ActiveTabContentAndVideosContainer>
        )}
      </AppContext.Consumer>
    </>
  )

  renderBody = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderActiveTabContent()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return <StyledLoader />
      default:
        return null
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }

    return (
      <>
        <Header />
        <AppContext.Consumer>
          {({isDarkTheme}) => (
            <ActiveTabContainer
              isdarktheme={isDarkTheme.toString()}
              data-testid="gaming"
            >
              <SideBar />
              <BannerActiveTabContentContainer>
                {this.renderBody()}
              </BannerActiveTabContentContainer>
            </ActiveTabContainer>
          )}
        </AppContext.Consumer>
      </>
    )
  }
}
export default Gaming
