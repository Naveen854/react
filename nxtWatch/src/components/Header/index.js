import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FiLogOut} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'
import {ImSun} from 'react-icons/im'
import {BsList} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import NavTabsList from '../NavTabsList'
import AppContext from '../../context/AppContext'
import {
  HeaderContainer,
  WebsiteLogoImg,
  NavLinksContainerMobile,
  NavLinkItem,
  CustomBtn,
  NavMenuPopup,
  TabMenuContainer,
  LogoutPopupContainer,
  HeaderContent,
  NavLinksContainerLarge,
  ProfileImage,
  LogoutBtn,
  CloseButton,
  CustomText,
  ConfirmButton,
  CloseBtnContainer,
  LogoutPopup,
} from './styledComponents'
import 'reactjs-popup/dist/index.css'
import './index.css'

const WEBSITE_LOGO_LIGHT =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
const WEBSITE_LOGO_DARK =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

const LogoutPopupContent = ({onClickLogout, close}) => (
  <AppContext.Consumer>
    {({isDarkTheme}) => (
      <LogoutPopupContainer>
        <CustomText isdarktheme={isDarkTheme.toString()}>
          Are you sure, you want to logout?
        </CustomText>
        <CloseButton onClick={() => close()}>Cancel</CloseButton>
        <ConfirmButton onClick={onClickLogout}>Confirm</ConfirmButton>
      </LogoutPopupContainer>
    )}
  </AppContext.Consumer>
)

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  const {
    history: {
      location: {pathname},
    },
  } = props

  return (
    <AppContext.Consumer>
      {({isDarkTheme, toggleTheme}) => {
        const webSiteLogo = isDarkTheme ? WEBSITE_LOGO_DARK : WEBSITE_LOGO_LIGHT
        return (
          <HeaderContainer isdarktheme={isDarkTheme.toString()}>
            <HeaderContent>
              <Link to="/">
                <WebsiteLogoImg src={webSiteLogo} alt="website logo" />
              </Link>

              <NavLinksContainerMobile>
                <NavLinkItem>
                  <CustomBtn onClick={() => toggleTheme()} data-testid="theme">
                    {isDarkTheme ? (
                      <ImSun color="#ffffff" size={20} />
                    ) : (
                      <FaMoon size={20} />
                    )}
                  </CustomBtn>
                </NavLinkItem>
                <NavLinkItem>
                  <NavMenuPopup
                    modal
                    isdarktheme={isDarkTheme.toString()}
                    trigger={
                      <CustomBtn type="button" className="trigger-button">
                        <BsList
                          size={20}
                          color={isDarkTheme ? '#f9f9f9' : '#181818'}
                        />
                      </CustomBtn>
                    }
                  >
                    {close => (
                      <>
                        <CloseBtnContainer type="button" onClick={close}>
                          <AiOutlineClose
                            size={20}
                            color={isDarkTheme ? '#f9f9f9' : '#181818'}
                          />
                        </CloseBtnContainer>
                        <TabMenuContainer>
                          <NavTabsList pathname={pathname} closePopUp={close} />
                        </TabMenuContainer>
                      </>
                    )}
                  </NavMenuPopup>
                </NavLinkItem>
                <NavLinkItem>
                  <LogoutPopup
                    modal
                    isdarktheme={isDarkTheme.toString()}
                    className="tabs-list-popup"
                    trigger={
                      <CustomBtn type="button" className="trigger-button">
                        <FiLogOut
                          size={20}
                          color={isDarkTheme ? '#f9f9f9' : '#181818'}
                        />
                      </CustomBtn>
                    }
                  >
                    {close => (
                      <LogoutPopupContent
                        close={close}
                        onClickLogout={onClickLogout}
                      />
                    )}
                  </LogoutPopup>
                </NavLinkItem>
              </NavLinksContainerMobile>
              <NavLinksContainerLarge>
                <NavLinkItem>
                  <CustomBtn onClick={() => toggleTheme()}>
                    {isDarkTheme ? (
                      <ImSun color="#ffffff" size={30} />
                    ) : (
                      <FaMoon size={30} />
                    )}
                  </CustomBtn>
                </NavLinkItem>
                <NavLinkItem>
                  <ProfileImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </NavLinkItem>
                <NavLinkItem>
                  <LogoutPopup
                    modal
                    isdarktheme={isDarkTheme.toString()}
                    trigger={
                      <LogoutBtn
                        type="button"
                        isdarktheme={isDarkTheme.toString()}
                      >
                        Logout
                      </LogoutBtn>
                    }
                  >
                    {close => (
                      <LogoutPopupContent
                        close={close}
                        onClickLogout={onClickLogout}
                      />
                    )}
                  </LogoutPopup>
                </NavLinkItem>
              </NavLinksContainerLarge>
            </HeaderContent>
          </HeaderContainer>
        )
      }}
    </AppContext.Consumer>
  )
}
export default withRouter(Header)
