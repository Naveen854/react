import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'
import Cookies from 'js-cookie'
import Header from '../Header'
import FailureView from '../FailureView'
import SideBar from '../Sidebar'
import Banner from '../Banner'
import StyledLoader from '../StyledLoader'
import VideoItem from '../VideoItem'
import {
  HomeContainer,
  BannerActiveTabContentContainer,
  SearchInputVideosListContainer,
  SearchInputContainer,
  SearchInput,
  SearchBtn,
  VideosListContainer,
} from './styledComponents'

import {
  FailureViewContainer,
  FailureViewImg,
  FailureViewHeading,
  FailureViewText,
  RetryBtn,
} from '../../commonStyles/FailureViewStyles'
import AppContext from '../../context/AppContext'
import {apiStatusConstants} from '../../constants/appConstants'

class Home extends Component {
  isFullyMounted = false

  state = {
    searchInput: '',
    videosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.isMounted = true
    this.fetchHomeVideosList()
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

  fetchHomeVideosList = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const {searchInput} = this.state
    const token = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
      const videosList = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
      }))
      this.setState({videosList, apiStatus: apiStatusConstants.success})
    } else if (this.isMounted) {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickSearch = () => {
    this.fetchHomeVideosList()
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  renderNoSearchResultsView = () => (
    <AppContext.Consumer>
      {({isDarkTheme}) => (
        <FailureViewContainer>
          <FailureViewImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
          />
          <FailureViewHeading isdarktheme={isDarkTheme.toString()}>
            No Search results found
          </FailureViewHeading>
          <FailureViewText>
            Try different key words or remove search filter
          </FailureViewText>
          <RetryBtn type="button" onClick={this.fetchHomeVideosList}>
            Retry
          </RetryBtn>
        </FailureViewContainer>
      )}
    </AppContext.Consumer>
  )

  renderFailureView = () => (
    <FailureView>
      <RetryBtn type="button" onClick={this.fetchHomeVideosList}>
        Retry
      </RetryBtn>
    </FailureView>
  )

  renderVideoList = () => {
    const {videosList} = this.state
    if (videosList.length === 0) {
      return this.renderNoSearchResultsView()
    }
    return (
      <VideosListContainer>
        {videosList.map(eachItem => (
          <VideoItem key={eachItem.id} videoData={eachItem} />
        ))}
      </VideosListContainer>
    )
  }

  renderActiveTabContent = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoList()
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

    const {searchInput} = this.state

    return (
      <AppContext.Consumer>
        {({isDarkTheme}) => (
          <>
            <Header />
            <HomeContainer
              isdarktheme={isDarkTheme.toString()}
              data-testid="home"
            >
              <SideBar />
              <BannerActiveTabContentContainer>
                <Banner />
                <SearchInputVideosListContainer>
                  <SearchInputContainer>
                    <SearchInput
                      type="search"
                      value={searchInput}
                      onChange={this.onChangeSearchInput}
                      isdarktheme={isDarkTheme.toString()}
                      placeholder="Search"
                    />
                    <SearchBtn
                      type="button"
                      onClick={this.onClickSearch}
                      isdarktheme={isDarkTheme.toString()}
                      data-testid="searchButton"
                    >
                      <BsSearch
                        size={16}
                        color={isDarkTheme ? '#ffffff' : '#000000'}
                      />
                    </SearchBtn>
                  </SearchInputContainer>
                  {this.renderActiveTabContent()}
                </SearchInputVideosListContainer>
              </BannerActiveTabContentContainer>
            </HomeContainer>
          </>
        )}
      </AppContext.Consumer>
    )
  }
}
export default Home
