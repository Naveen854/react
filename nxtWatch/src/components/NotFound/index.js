import Cookies from 'js-cookie'
import Header from '../Header'
import SideBar from '../Sidebar'
import AppContext from '../../context/AppContext'

import {NotFoundContainer, NotFoundViewContainer} from './styledComponents'

import {
  FailureViewImg,
  FailureViewHeading,
  FailureViewText,
} from '../../commonStyles/FailureViewStyles'

const NOT_FOUND_DARK_IMG =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
const NOT_FOUND_LIGHT_IMG =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

const NotFound = () => {
  const renderNotFoundView = (authorized = true) => (
    <AppContext.Consumer>
      {({isDarkTheme}) => {
        const notFoundImgSrc = isDarkTheme
          ? NOT_FOUND_DARK_IMG
          : NOT_FOUND_LIGHT_IMG
        return (
          <NotFoundViewContainer
            authorized={authorized.toString()}
            isdarktheme={isDarkTheme.toString()}
          >
            <FailureViewImg src={notFoundImgSrc} alt="not found" />
            <FailureViewHeading isdarktheme={isDarkTheme.toString()}>
              Page Not Found
            </FailureViewHeading>
            <FailureViewText isdarktheme={isDarkTheme.toString()}>
              We are sorry, the page you requested could
              <br /> not be found.
            </FailureViewText>
          </NotFoundViewContainer>
        )
      }}
    </AppContext.Consumer>
  )

  const token = Cookies.get('jwt_token')
  if (token === undefined) {
    return renderNotFoundView(false)
  }

  return (
    <>
      <Header />
      <NotFoundContainer>
        <SideBar />
        {renderNotFoundView()}
      </NotFoundContainer>
    </>
  )
}

export default NotFound
