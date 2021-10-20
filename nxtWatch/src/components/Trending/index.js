import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'
import SideBar from '../Sidebar'
import Banner from '../Banner'
import FailureView from '../FailureView'
import StyledLoader from '../StyledLoader'
import NavActiveTabSavedVideosList from '../NavActiveTabVideosList'
import AppContext from '../../context/AppContext'
import {ActiveTabIcon} from './styledComponents'
import {
  ActiveTabContainer,
  BannerActiveTabContentContainer,
  ActiveTabContentAndVideosContainer,
  ActiveTabHeader,
  ActiveTabTitle,
} from '../../commonStyles/ActiveTabStyles'

import {RetryBtn} from '../../commonStyles/FailureViewStyles'
import {apiStatusConstants} from '../../constants/appConstants'

class Trending extends Component {
  isFullyMounted = false

  state = {
    trendingVideosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.isMounted = true
    this.fetchTrendingVideosList()
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

  fetchTrendingVideosList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const token = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/trending`
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok && this.isMounted) {
      const trendingVideosList = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
      }))
      this.setState({
        trendingVideosList,
        apiStatus: apiStatusConstants.success,
      })
    } else if (this.isMounted) {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderFailureView = () => (
    <FailureView>
      <RetryBtn onClick={this.fetchTrendingVideosList}>Retry</RetryBtn>
    </FailureView>
  )

  renderActiveTabContent = () => {
    const {trendingVideosList} = this.state
    return (
      <AppContext.Consumer>
        {({isDarkTheme}) => (
          <>
            <Banner />
            <ActiveTabContentAndVideosContainer>
              <ActiveTabHeader isdarktheme={isDarkTheme.toString()}>
                <ActiveTabIcon isdarktheme={isDarkTheme.toString()} />
                <ActiveTabTitle isdarktheme={isDarkTheme.toString()}>
                  &nbsp;Trending
                </ActiveTabTitle>
              </ActiveTabHeader>
              <NavActiveTabSavedVideosList videosList={trendingVideosList} />
            </ActiveTabContentAndVideosContainer>
          </>
        )}
      </AppContext.Consumer>
    )
  }

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
              data-testid="trending"
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
export default Trending
