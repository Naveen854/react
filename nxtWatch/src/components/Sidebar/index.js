import {withRouter} from 'react-router-dom'
import NavTabsList from '../NavTabsList'
import AppContext from '../../context/AppContext'
import {
  SidebarContainer,
  ContactCardSection,
  ContactCardHeading,
  SocialIconsContainer,
  SocialIconImg,
  ContactCardText,
} from './styledComponents'

const SideBar = props => {
  const {
    history: {
      location: {pathname},
    },
  } = props

  return (
    <AppContext.Consumer>
      {({isDarkTheme}) => (
        <SidebarContainer isdarktheme={isDarkTheme.toString()}>
          <NavTabsList pathname={pathname} />
          <ContactCardSection>
            <ContactCardHeading isdarktheme={isDarkTheme.toString()}>
              CONTACT US
            </ContactCardHeading>
            <SocialIconsContainer>
              <SocialIconImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SocialIconImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SocialIconImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialIconsContainer>
            <ContactCardText isdarktheme={isDarkTheme.toString()}>
              Enjoy! Now to see your channels and recommendations!
            </ContactCardText>
          </ContactCardSection>
        </SidebarContainer>
      )}
    </AppContext.Consumer>
  )
}
export default withRouter(SideBar)
