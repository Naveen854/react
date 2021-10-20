import styled from 'styled-components'
import {DARK_THEME, LIGHT_THEME} from '../../constants/appConstants'

export const VideoItemContainer = styled.div`
  height: calc(100vh - 80px);
  background-color: ${({isdarktheme}) =>
    isdarktheme === 'true' ? DARK_THEME : LIGHT_THEME};
  overflow-y: scroll;
  display: flex;
  flex-direction: row;
`

export const VideoItemDetailsContainer = styled.div`
  width: 100%;
  height: inherit;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const VideoItemDetailsContent = styled.div`
  height: inherit;
  width: 100%;
  padding: 0;
  @media screen and (min-width: 768px) {
    padding: 20px 0px 0px 0px;
    width: 85%;
  }
  @media screen and (min-width: 992px) {
    padding-top: 40px;
    width: 80%;
  }
`

export const VideoDetailsContainer = styled.div`
  padding: 30px 20px;

  @media screen and (min-width: 768px) {
    padding: 40px 0px;
  }
`

export const VideoTitle = styled.p`
  margin: 10px 0px 0px 0px;
  font-size: 26px;
  font-weight: 400;
  color: ${({isdarktheme}) => (isdarktheme === 'true' ? '#ffffff' : '#181818')};
  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`

export const VideoStatsAndButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const VideoStatsText = styled.p`
  font-size: 16px;
  color: ${({isdarktheme}) => (isdarktheme === 'true' ? '#94a3b8' : '#475569')};
`

export const ButtonsContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
  @media screen and (min-width: 992px) {
    width: 45%;
  }
  @media screen and (min-width: 1126px) {
    width: 35%;
  }
`

export const CustomButton = styled.button`
  border: none;
  background-color: transparent;
  font-weight: ${({isactive}) => (isactive === 'true' ? '900' : '600')};
  color: ${({isactive}) => (isactive === 'true' ? '#2563eb' : '#64748b')};
  font-size: 16px;
  font-weight: 400;
  padding: 0px 10px;
  outline: none;
  cursor: pointer;

  :first-of-type {
    padding-left: 0px;
  }
  :last-of-type {
    padding-right: 0px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media screen and (min-width: 992px) {
    font-size: 18px;
  }
`

export const BtnName = styled.span`
  vertical-align: baseline;
  font-size: 16px;
`

export const Separator = styled.hr`
  background-color: ${({isdarktheme}) =>
    isdarktheme === 'true' ? '#e2e8f0' : '#d7dfe9'};
`

export const ChannelImageSubscriberCountContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const ChannelImage = styled.img`
  height: 60px;
  width: 60px;
  margin-right: 15px;
  align-self: flex-start;
`

export const ChannelNameSubscriberCountContainer = styled.section``

export const ChannelName = styled.p`
  margin-top: 0px;
  font-weight: 500;
  font-size: 20px;
  color: ${({isdarktheme}) => (isdarktheme === 'true' ? '#f1f1f1' : '#212121')};
`

export const SubscriberCountText = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${({isdarktheme}) => (isdarktheme === 'true' ? '#94a3b8' : '#475569')};
`

export const VideoDescriptionMobile = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${({isdarktheme}) => (isdarktheme === 'true' ? '#f1f1f1' : '#212121')};
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const VideoDescriptionLarge = styled(VideoDescriptionMobile)`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`
