import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header'
import SideBar from '../Sidebar'
import Banner from '../Banner'
import AppContext from '../../context/AppContext'

import {ActiveTabIcon} from './styledComponents'

import {
  ActiveTabContainer,
  BannerActiveTabContentContainer,
  ActiveTabContentAndVideosContainer,
  ActiveTabHeader,
  ActiveTabTitle,
} from '../../commonStyles/ActiveTabStyles'

import {
  FailureViewContainer,
  FailureViewImg,
  FailureViewHeading,
  FailureViewText,
} from '../../commonStyles/FailureViewStyles'
import NavActiveTabSavedVideosList from '../NavActiveTabVideosList'

const getSavedVideosList = () => {
  const appData = JSON.parse(localStorage.getItem('app_data'))
  if (appData === null) {
    return []
  }
  return appData.savedVideosList
}

const SavedVideos = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  const savedVideosList = getSavedVideosList()

  const renderFailureView = () => (
    <AppContext.Consumer>
      {({isDarkTheme}) => (
        <FailureViewContainer isdarktheme={isDarkTheme.toString()}>
          <FailureViewImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <FailureViewHeading isdarktheme={isDarkTheme.toString()}>
            No saved videos found
          </FailureViewHeading>
          <FailureViewText isdarktheme={isDarkTheme.toString()}>
            You can save your videos while watching them
          </FailureViewText>
        </FailureViewContainer>
      )}
    </AppContext.Consumer>
  )

  const renderActiveTabContent = () => (
    <>
      <Banner />
      <AppContext.Consumer>
        {({isDarkTheme}) => (
          <ActiveTabContentAndVideosContainer>
            <ActiveTabHeader isdarktheme={isDarkTheme.toString()}>
              <ActiveTabIcon isdarktheme={isDarkTheme.toString()} />
              <ActiveTabTitle isdarktheme={isDarkTheme.toString()}>
                &nbsp;Saved Videos
              </ActiveTabTitle>
            </ActiveTabHeader>
            <NavActiveTabSavedVideosList videosList={savedVideosList} />
          </ActiveTabContentAndVideosContainer>
        )}
      </AppContext.Consumer>
    </>
  )

  return (
    <>
      <Header />
      <AppContext.Consumer>
        {({isDarkTheme}) => (
          <ActiveTabContainer
            isdarktheme={isDarkTheme.toString()}
            data-testid="savedVideos"
          >
            <SideBar />
            <BannerActiveTabContentContainer>
              {savedVideosList.length === 0
                ? renderFailureView()
                : renderActiveTabContent()}
            </BannerActiveTabContentContainer>
          </ActiveTabContainer>
        )}
      </AppContext.Consumer>
    </>
  )
}

export default SavedVideos
