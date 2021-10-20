import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {BiDislike, BiLike} from 'react-icons/bi'
import {CgPlayListAdd} from 'react-icons/cg'
import Header from '../Header'
import SideBar from '../Sidebar'
import FailureView from '../FailureView'
import StyledLoader from '../StyledLoader'
import AppContext from '../../context/AppContext'
import {
  VideoItemContainer,
  VideoItemDetailsContainer,
  VideoItemDetailsContent,
  VideoDetailsContainer,
  VideoTitle,
  VideoStatsAndButtonsContainer,
  VideoStatsText,
  ButtonsContainer,
  CustomButton,
  Separator,
  ChannelImageSubscriberCountContainer,
  ChannelName,
  ChannelImage,
  ChannelNameSubscriberCountContainer,
  SubscriberCountText,
  VideoDescriptionMobile,
  VideoDescriptionLarge,
} from './styledComponents'
import {RetryBtn} from '../../commonStyles/FailureViewStyles'
import {apiStatusConstants} from '../../constants/appConstants'

const getVideoLikeStatus = videoId => {
  const appData = JSON.parse(localStorage.getItem('app_data'))
  if (appData === null) {
    return null
  }
  const videoItem = appData.likedVideosList.find(
    eachItem => eachItem.id === videoId,
  )
  if (videoItem === undefined) {
    return null
  }
  return videoItem.isVideoLiked
}

const getIsVideoSavedStatus = videoId => {
  const appData = JSON.parse(localStorage.getItem('app_data'))
  if (appData === null) {
    return false
  }
  const videoItem = appData.savedVideosList.find(
    eachItem => eachItem.id === videoId,
  )
  if (videoItem === undefined) {
    return false
  }
  return videoItem.isVideoSaved
}

class VideoItemDetails extends Component {
  isFullyMounted = false

  state = {
    videoItemDetails: {},
    apiStatus: apiStatusConstants.initial,
    isVideoLiked: null,
    isVideoSaved: false,
  }

  abortController = new AbortController()

  componentDidMount() {
    this.isMounted = true
    this.fetchVideoItemDetails()
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

  fetchVideoItemDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const token = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
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
      const videoItemDetails = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
      }
      this.setState({
        videoItemDetails,
        apiStatus: apiStatusConstants.success,
        isVideoLiked: getVideoLikeStatus(id),
        isVideoSaved: getIsVideoSavedStatus(id),
      })
    } else if (this.isMounted) {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickSaveVideo = videoId => {
    const {videoItemDetails} = this.state
    let appData = JSON.parse(localStorage.getItem('app_data'))
    const videoItem = appData.savedVideosList.find(
      eachItem => eachItem.id === videoId,
    )
    if (videoItem === undefined) {
      appData.savedVideosList.push({...videoItemDetails, isVideoSaved: true})
    } else {
      const modifiedVideosList = appData.savedVideosList.filter(
        eachItem => eachItem.id !== videoId,
      )
      console.log(modifiedVideosList)
      appData = {...appData, savedVideosList: modifiedVideosList}
    }
    localStorage.setItem('app_data', JSON.stringify(appData))
    this.setState(prevState => ({isVideoSaved: !prevState.isVideoSaved}))
  }

  onClickLike = videoId => {
    const {videoItemDetails} = this.state
    let appData = JSON.parse(localStorage.getItem('app_data'))
    const videoItem = appData.likedVideosList.find(
      eachItem => eachItem.id === videoId,
    )
    if (videoItem === undefined) {
      appData.likedVideosList.push({...videoItemDetails, isVideoLiked: true})
    } else {
      const modifiedVideosList = appData.likedVideosList.map(eachItem => {
        if (eachItem.id === videoId) {
          return {...eachItem, isVideoLiked: true}
        }
        return {...eachItem}
      })
      appData = {...appData, likedVideosList: modifiedVideosList}
    }
    localStorage.setItem(
      'app_data',
      JSON.stringify({
        ...appData,
      }),
    )
    this.setState({isVideoLiked: true})
  }

  onClickDislike = videoId => {
    const {videoItemDetails} = this.state
    let appData = JSON.parse(localStorage.getItem('app_data'))
    const videoItem = appData.likedVideosList.find(
      eachItem => eachItem.id === videoId,
    )
    if (videoItem === undefined) {
      appData.likedVideosList.push({...videoItemDetails, isVideoLiked: false})
    } else {
      const modifiedVideosList = appData.likedVideosList.map(eachItem => {
        if (eachItem.id === videoId) {
          return {...eachItem, isVideoLiked: false}
        }
        return {...eachItem}
      })
      appData = {...appData, likedVideosList: modifiedVideosList}
    }
    localStorage.setItem(
      'app_data',
      JSON.stringify({
        ...appData,
      }),
    )
    this.setState({isVideoLiked: false})
  }

  renderFailureView = () => (
    <FailureView>
      <RetryBtn onClick={this.fetchVideoItemDetails}>Retry</RetryBtn>
    </FailureView>
  )

  renderVideoItemDetails = () => {
    const {videoItemDetails} = this.state
    const {
      id,
      title,
      videoUrl,
      name,
      profileImageUrl,
      subscriberCount,
      viewCount,
      publishedAt,
      description,
    } = videoItemDetails

    return (
      <AppContext.Consumer>
        {({isDarkTheme}) => {
          const {isVideoLiked, isVideoSaved} = this.state
          const isLiked =
            isVideoLiked === null ? 'false' : isVideoLiked.toString()
          const isVideoDisLiked =
            isVideoLiked === null ? 'false' : (!isVideoLiked).toString()
          return (
            <VideoItemDetailsContent>
              <ReactPlayer url={videoUrl} height="55%" width="100%" />
              <VideoDetailsContainer>
                <VideoTitle isdarktheme={isDarkTheme.toString()}>
                  {title}
                </VideoTitle>
                <VideoStatsAndButtonsContainer>
                  <VideoStatsText isdarktheme={isDarkTheme.toString()}>
                    {viewCount} Views &nbsp;&nbsp; {publishedAt}
                  </VideoStatsText>
                  <ButtonsContainer>
                    <CustomButton
                      onClick={() => this.onClickLike(id)}
                      isactive={isLiked}
                    >
                      <BiLike size={20} />
                      &nbsp;Like
                    </CustomButton>
                    <CustomButton
                      onClick={() => this.onClickDislike(id)}
                      isactive={isVideoDisLiked}
                    >
                      <BiDislike size={20} />
                      &nbsp;Dislike
                    </CustomButton>
                    <CustomButton
                      onClick={() => this.onClickSaveVideo(id)}
                      isactive={isVideoSaved.toString()}
                    >
                      <CgPlayListAdd size={20} />
                      &nbsp;{isVideoSaved ? 'Saved' : 'Save'}
                    </CustomButton>
                  </ButtonsContainer>
                </VideoStatsAndButtonsContainer>
                <Separator isdarktheme={isDarkTheme.toString()} />

                <ChannelImageSubscriberCountContainer>
                  <ChannelImage src={profileImageUrl} alt="channel logo" />
                  <ChannelNameSubscriberCountContainer>
                    <ChannelName isdarktheme={isDarkTheme.toString()}>
                      {name}
                    </ChannelName>
                    <SubscriberCountText isdarktheme={isDarkTheme.toString()}>
                      {subscriberCount} subscribers
                    </SubscriberCountText>
                    <VideoDescriptionLarge isdarktheme={isDarkTheme.toString()}>
                      {description}
                    </VideoDescriptionLarge>
                  </ChannelNameSubscriberCountContainer>
                </ChannelImageSubscriberCountContainer>
                <VideoDescriptionMobile isdarktheme={isDarkTheme.toString()}>
                  {description}
                </VideoDescriptionMobile>
              </VideoDetailsContainer>
            </VideoItemDetailsContent>
          )
        }}
      </AppContext.Consumer>
    )
  }

  renderBody = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoItemDetails()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return <StyledLoader />
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <AppContext.Consumer>
          {({isDarkTheme}) => (
            <VideoItemContainer
              isdarktheme={isDarkTheme.toString()}
              data-testid="videoItemDetails"
            >
              <SideBar />
              <VideoItemDetailsContainer>
                {this.renderBody()}
              </VideoItemDetailsContainer>
            </VideoItemContainer>
          )}
        </AppContext.Consumer>
      </>
    )
  }
}

export default VideoItemDetails
