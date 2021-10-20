import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {DARK_THEME, LIGHT_THEME} from '../constants/appConstants'

// Wrapper Below Header Content
export const ActiveTabContainer = styled.div`
  height: calc(100vh - 80px);
  overflow-y: scroll;
  background-color: ${({isdarktheme}) =>
    isdarktheme === 'true' ? DARK_THEME : LIGHT_THEME};
  display: flex;
  flex-direction: row;
`
// Wrapper for Banner And ActiveTab Content
export const BannerActiveTabContentContainer = styled.div`
  width: 100%;
  height: inherit;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    position: fixed;
    top: 80px;
    left: 210px;
    width: calc(100vw - 210px);
  }
  @media screen and (min-width: 992px) {
    width: calc(100vw - 230px);
    left: 230px;
  }
`
export const ActiveTabContentAndVideosContainer = styled.div`
  padding: 0px;
  width: 100%;
`
// Active Tab Icon and Active tab title container
export const ActiveTabHeader = styled.div`
  height: 120px;
  padding: 5px 30px;
  background-color: ${({isdarktheme}) =>
    isdarktheme === 'true' ? '#383838' : '#f1f1f1'};
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (min-width: 768px) {
    padding: 5px 15px;
  }
  @media screen and (min-width: 992px) {
    padding: 5px 30px;
  }
`
export const ActiveTabTitle = styled.h1`
  margin: 0;
  padding: 0;
  color: ${({isdarktheme}) => (isdarktheme === 'true' ? '#ffffff' : '#000000')};
  font-size: 30px;
  font-weight: 700;
  @media screen and (min-width: 576px) {
    font-size: 42px;
  }
  @media screen and (min-width: 992px) {
    font-size: 50px;
  }
`

export const ActiveTabVideoListContainer = styled.ul`
  width: 100%;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    padding: 30px 20px;
  }
  @media screen and (min-width: 992px) {
    padding: 40px 20px;
  }
`
export const StyledLink = styled(Link)`
  width: inherit;
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`

export const VideoTitle = styled.p`
  padding-top: 5px;
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: ${({isdarktheme}) => (isdarktheme === 'true' ? '#ffffff' : '#181818')};
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
  @media screen and (min-width: 992px) {
    font-size: 24px;
  }
`
