import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  width: 100%;
  margin: 10px 5px 0px 0px;
  @media screen and (min-width: 768px) {
    width: 44%;
    margin-bottom: 10px;
  }
  @media screen and (min-width: 992px) {
    width: 32.5%;
  }
`

export const VideoItemContainer = styled.li`
  width: 100%;
`

export const VideoThumbnailImg = styled.img`
  min-height: 100px;
  width: 100%;
`

export const VideoDetailsContainer = styled.div`
  padding: 20px 10px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  background-color: transparent;
`

export const ChannelImg = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 20px;
`

export const TextContainer = styled.section``

export const VideoTitle = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
  color: ${({isdarktheme}) => (isdarktheme === 'true' ? '#ffffff' : '#1e293b')};
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const ChannelName = styled.p`
  font-size: 14px;
  font-weight: normal;
  color: ${({isdarktheme}) => (isdarktheme === 'true' ? '#94a3b8' : '#475569')};
`

export const VideoStats = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: normal;
  color: ${({isdarktheme}) => (isdarktheme === 'true' ? '#94a3b8' : '#475569')};
`
