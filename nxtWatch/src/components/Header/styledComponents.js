import styled from 'styled-components'
import Popup from 'reactjs-popup'
import {NAV_DARK_THEME, NAV_LIGHT_THEME} from '../../constants/appConstants'

export const HeaderContainer = styled.nav`
  padding: 15px 0px;
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({isdarktheme}) =>
    isdarktheme === 'true' ? NAV_DARK_THEME : NAV_LIGHT_THEME};
`

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
`

export const WebsiteLogoImg = styled.img`
  height: 20px;
  min-width: 100px;
  @media screen and (min-width: 576px) {
    height: 30px;
    min-width: 150px;
  }
`

export const NavLinksContainerMobile = styled.ul`
  margin: 0px;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: row;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const NavLinkItem = styled.li`
  margin: 0px 3px 0px 3px;
  :last-of-type {
    margin: 0px 0px 0px 3px;
  }

  @media screen and (min-width: 768px) {
    margin: 0px 10px 0px 10px;
    :last-of-type {
      margin: 0px 0px 0px 10px;
    }
  }
`

export const CustomBtn = styled.button`
  background-color: transparent;
  border: none;
`

// PopUp Mobile For Active Tab
export const NavMenuPopup = styled(Popup)`
  &-content {
    height: 100vh;
    width: 100vw;
    padding: 20px;
    display: flex;
    flex-direction: column;
    background-color: ${({isdarktheme}) =>
      isdarktheme === 'true' ? NAV_DARK_THEME : NAV_LIGHT_THEME};
  }
`

export const CloseBtnContainer = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-end;
`

export const TabMenuContainer = styled.div`
  height: calc(100vh - 80px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

// Popup MObile
export const LogoutPopupContainer = styled.div`
  border-radius: 5px;
  padding: 10px;
`

export const CustomText = styled.p`
  color: ${({isdarktheme}) => (isdarktheme === 'true' ? '#ffffff' : '#212121')};
`

export const CloseButton = styled.button`
  color: #94a3b8;
  background-color: 'transparent';
  border: 1px solid #94a3b8;
  padding: 10px 8px;
  margin-right: 10px;
`
export const ConfirmButton = styled.button`
  color: #f1f5f9;
  background-color: #3b82f6;
  border: none;
  padding: 10px 8px;
  margin-right: 10px;
`

// Large
export const NavLinksContainerLarge = styled(NavLinksContainerMobile)`
  display: none;

  @media screen and (min-width: 768px) {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const ProfileImage = styled.img`
  height: 35px;
  width: 35px;
`
export const LogoutBtn = styled(CustomBtn)`
  border-radius: 5px;
  padding: 8px 10px;
  border: 1px solid
    ${({isdarktheme}) => (isdarktheme === 'true' ? '#f9f9f9' : '#3b82f6')};
  color: ${({isdarktheme}) => (isdarktheme === 'true' ? '#f9f9f9' : '#3b82f6')};
  font-size: 16px;
  font-weight: 700;
`

export const LogoutPopup = styled(Popup)`
  &-content {
    background-color: ${({isdarktheme}) =>
      isdarktheme === 'true' ? NAV_DARK_THEME : NAV_LIGHT_THEME};
  }
`
