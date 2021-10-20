import styled from 'styled-components'
import {NAV_DARK_THEME, NAV_LIGHT_THEME} from '../../constants/appConstants'

export const SidebarContainer = styled.aside`
  display: none;
  @media screen and (min-width: 768px) {
    position: fixed;
    left: 0;
    top: 80px;
    bottom: 0;
    right: calc(100vw - 210px);
    width: 210px;
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${({isdarktheme}) =>
      isdarktheme === 'true' ? NAV_DARK_THEME : NAV_LIGHT_THEME};
  }
  @media screen and (min-width: 992px) {
    right: calc(100vw - 230px);
    width: 230px;
  }
`

export const ContactCardSection = styled.section`
  padding: 20px 20px;
`
export const ContactCardHeading = styled.p`
  color: ${({isdarktheme}) => (isdarktheme === 'true' ? '#ffffff' : '#1f1f1f')};
  font-size: 20px;
  font-weight: bold;
`

export const SocialIconsContainer = styled.div``

export const SocialIconImg = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 10px;
  :last-of-type {
    margin-right: 0px;
  }
`

export const ContactCardText = styled.p`
  color: ${({isdarktheme}) => (isdarktheme === 'true' ? '#f1f1f1' : '#1f1f1f')};
  font-size: 16px;
  font-weight: 600;
`
