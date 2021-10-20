import styled from 'styled-components'
import {CgPlayListAdd} from 'react-icons/cg'
import {DARK_THEME, LIGHT_THEME} from '../../constants/appConstants'

export const SavedVideosContainer = styled.div`
  height: calc(100vh - 80px);
  overflow-y: scroll;
  background-color: ${({isdarktheme}) =>
    isdarktheme === 'true' ? DARK_THEME : LIGHT_THEME};
  display: flex;
  flex-direction: row;
`

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

export const ActiveTabHeader = styled.div`
  height: 120px;
  padding: 5px 30px;
  margin-bottom: 20px;
  background-color: ${({isdarktheme}) =>
    isdarktheme === 'true' ? '#383838' : '#f1f1f1'};
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (min-width: 768px) {
    padding: 5px 40px;
  }
  @media screen and (min-width: 992px) {
    padding: 5px 50px;
  }
`

export const ActiveTabIcon = styled(CgPlayListAdd)`
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

export const SavedVideoListContainer = styled.ul`
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

export const SavedVideoItemContainer = styled.li`
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

export const SavedVideoImg = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    min-width: 300px;
  }
  @media screen and (min-width: 992px) {
    max-width: 450px;
  }
`

export const SavedVideoDetailsContainer = styled.div`
  width: 100%;
  padding: 0;
  @media screen and (min-width: 768px) {
    padding: 0px 20px;
  }
`

export const VideoTitle = styled.h1`
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

export const VideoStatsTextMobile = styled.p`
  font-size: 14px;
  color: ${({isdarktheme}) => (isdarktheme === 'true' ? '#94a3b8' : '#909090')};
  font-weight: 500;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const VideoStatsTextLarge = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    font-weight: 500;
    font-size: 14px;
    color: ${({isdarktheme}) =>
      isdarktheme === 'true' ? '#94a3b8' : '#616e7c'};
  }
`

// FailureView

export const FailureViewContainer = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FailureViewImg = styled.img`
  height:350px;
  width: 80%;
  @media screen and (min-width: 768px) {
    height:400px
    width: 60%;
    max-width:600px;
  }
`

export const FailureViewHeading = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: ${({isDarkTheme}) => (isDarkTheme ? '#ffffff' : '#212121')};
`

export const FailureViewText = styled.p`
  font-size: 14px;
  font-weight: normal;
  color: ${({isDarkTheme}) => (isDarkTheme ? '#f1f5f9' : '#7e858e')};
`

export const RetryBtn = styled.button`
  border: none;
  background-color: #4f46e5;
  padding: 10px 16px;
  font-size: 16px;
  font-weight: 700;
`
