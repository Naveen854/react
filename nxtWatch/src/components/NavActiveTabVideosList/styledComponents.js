import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoListContainer = styled.ul`
  width: 100%;
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

export const VideoItemContainer = styled.li`
  min-height: 250px;
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media screen and (min-width: 768px) {
    height: 200px;
    flex-direction: row;
    margin-bottom: 30px;
  }
`

export const VideoItemImg = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    min-width: 300px;
  }
  @media screen and (min-width: 992px) {
    max-width: 500px;
  }
`

export const VideoItemDetailsContainer = styled.div`
  width: 100%;
  padding: 10px 10px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    padding: 0px 20px;
  }
`

export const ChannelImg = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 20px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const TextContainer = styled.section``

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

export const VideoStatsText = styled.p`
  display: inline-block;
  margin: 0px 0px 10px 0px;
  font-size: 16px;
  font-weight: 500;
`

export const VideoStatsTextMobileContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${({isdarktheme}) => (isdarktheme === 'true' ? '#94a3b8' : '#909090')};
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const VideoStatsTextLargeContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    font-weight: 500;
    font-size: 14px;
    color: ${({isdarktheme}) =>
      isdarktheme === 'true' ? '#94a3b8' : '#616e7c'};
  }
`

export const CustomContainer = styled.div``
