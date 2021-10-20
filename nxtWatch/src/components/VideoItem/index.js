import {formatDistanceToNow} from 'date-fns'
import {
  StyledLink,
  VideoItemContainer,
  VideoDetailsContainer,
  ChannelImg,
  TextContainer,
  VideoTitle,
  ChannelName,
  VideoStats,
  VideoThumbnailImg,
} from './styledComponents'
import AppContext from '../../context/AppContext'

const VideoCard = ({videoData}) => {
  const {
    id,
    title,
    thumbnailUrl,
    name,
    profileImageUrl,
    viewCount,
    publishedAt,
  } = videoData
  const publishedDate = formatDistanceToNow(new Date(publishedAt))
  return (
    <AppContext.Consumer>
      {({isDarkTheme}) => (
        <StyledLink to={`/videos/${id}`}>
          <VideoItemContainer>
            <VideoThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
            <VideoDetailsContainer>
              <ChannelImg src={profileImageUrl} alt="channel logo" />
              <TextContainer>
                <VideoTitle isdarktheme={isDarkTheme.toString()}>
                  {title}
                </VideoTitle>
                <ChannelName isdarktheme={isDarkTheme.toString()}>
                  {name}
                </ChannelName>
                <VideoStats isdarktheme={isDarkTheme.toString()}>
                  {viewCount} Views &nbsp;&#9679;&nbsp; {publishedDate}
                </VideoStats>
              </TextContainer>
            </VideoDetailsContainer>
          </VideoItemContainer>
        </StyledLink>
      )}
    </AppContext.Consumer>
  )
}

export default VideoCard
