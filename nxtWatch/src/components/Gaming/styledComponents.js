import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {SiYoutubegaming} from 'react-icons/si'
import {DARK_THEME, LIGHT_THEME} from '../../constants/appConstants'

export const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  width: 44%;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 30%;
  }
  @media screen and (min-width: 1126px) {
    width: 23%;
  }
`

export const GamingVideosContainer = styled.div`
  height: calc(100vh - 80px);
  overflow-y: scroll;
  background-color: ${({isdarktheme}) =>
    isdarktheme === 'true' ? DARK_THEME : LIGHT_THEME};
  display: flex;
  flex-direction: row;
`

export const ActiveTabIcon = styled(SiYoutubegaming)`
  height: 80px;
  width: 80px;
  padding: 10px;
  margin-right: 10px;
  border-radius: 50%;
  font-size: 50px;
  background-color: ${({isdarktheme}) =>
    isdarktheme === 'true' ? '#212121' : '#e2e8f0'};
  color: #ff0000;
  vertical-align: middle;
`
export const GamingVideoListContainer = styled.ul`
  width: 100%;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media screen and (min-width: 768px) {
    padding: 0px 15px;
  }
  @media screen and (min-width: 992px) {
    padding: 0px 30px;
  }
`

export const GamingVideoItemContainer = styled.li``

export const GamingVideoImg = styled.img`
  width: 100%;
`

export const GamingVideoDetailsContainer = styled.div`
  width: 100%;
`

export const VideoStatsText = styled.p`
  font-size: 14px;
  color: ${({isdarktheme}) => (isdarktheme === 'true' ? '#94a3b8' : '#909090')};
  font-weight: 500;
`
