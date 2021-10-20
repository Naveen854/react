import {formatDistanceToNow} from 'date-fns'
import AppContext from '../../context/AppContext'
import {
  VideoListContainer,
  StyledLink,
  VideoItemContainer,
  VideoItemImg,
  VideoItemDetailsContainer,
  ChannelImg,
  TextContainer,
  VideoTitle,
  VideoStatsText,
  VideoStatsTextMobileContainer,
  VideoStatsTextLargeContainer,
  CustomContainer,
} from './styledComponents'

const NavActiveTabSavedVideosList = ({videosList}) => (
  <AppContext.Consumer>
    {({isDarkTheme}) => (
      <VideoListContainer>
        {videosList.map(eachItem => {
          const {
            id,
            title,
            thumbnailUrl,
            name,
            profileImageUrl,
            viewCount,
            publishedAt,
          } = eachItem

          const publishedDate = formatDistanceToNow(new Date(publishedAt))

          return (
            <StyledLink key={id} to={`/videos/${id}`}>
              <VideoItemContainer>
                <VideoItemImg src={thumbnailUrl} alt="video thumbnail" />
                <VideoItemDetailsContainer>
                  <ChannelImg src={profileImageUrl} alt="channel logo" />
                  <TextContainer>
                    <VideoTitle isdarktheme={isDarkTheme.toString()}>
                      {title}
                    </VideoTitle>
                    <VideoStatsTextMobileContainer>
                      <VideoStatsText isdarktheme={isDarkTheme.toString()}>
                        {name}
                      </VideoStatsText>
                      &nbsp;&#9679;&nbsp;
                      <VideoStatsText isdarktheme={isDarkTheme.toString()}>
                        {viewCount} Views
                      </VideoStatsText>
                      &nbsp;&#9679;&nbsp;
                      <VideoStatsText isdarktheme={isDarkTheme.toString()}>
                        {publishedDate}
                      </VideoStatsText>
                    </VideoStatsTextMobileContainer>
                    <VideoStatsTextLargeContainer>
                      <VideoStatsText isdarktheme={isDarkTheme.toString()}>
                        {name}
                      </VideoStatsText>
                      <CustomContainer>
                        <VideoStatsText isdarktheme={isDarkTheme.toString()}>
                          {viewCount} Views
                        </VideoStatsText>
                        &nbsp;&#9679;&nbsp;
                        <VideoStatsText isdarktheme={isDarkTheme.toString()}>
                          {publishedDate}
                        </VideoStatsText>
                      </CustomContainer>
                    </VideoStatsTextLargeContainer>
                  </TextContainer>
                </VideoItemDetailsContainer>
              </VideoItemContainer>
            </StyledLink>
          )
        })}
      </VideoListContainer>
    )}
  </AppContext.Consumer>
)

export default NavActiveTabSavedVideosList
