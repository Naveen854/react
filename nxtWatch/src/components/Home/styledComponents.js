import styled from 'styled-components'
import {HOME_DARK_THEME, LIGHT_THEME} from '../../constants/appConstants'

export const HomeContainer = styled.div`
  height: calc(100vh - 80px);
  overflow-y: scroll;
  background-color: ${({isdarktheme}) =>
    isdarktheme === 'true' ? HOME_DARK_THEME : LIGHT_THEME};
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

export const SearchInputVideosListContainer = styled.div`
  flex: 1;
  padding: 0px;
  width: 100%;
  @media screen and (min-width: 768px) {
    padding: 15px;
  }
  @media screen and (min-width: 992px) {
    padding: 30px;
  }
`

export const SearchInputContainer = styled.div`
  height: 40px;
  width: 90%;
  border: 1px solid gray;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px auto;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    width: 80%;
    margin: 0;
  }
  @media screen and (min-width: 992px) {
    width: 60%;
  }
`

export const SearchInput = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  color: ${({isdarktheme}) => (isdarktheme === 'true' ? '#ffffff' : '#000000')};
  font-size: 14px;
  font-weight: 500;
  width: 80%;
  flex-grow: 1;
  padding: 5px 10px;
  @media screen and(min-width:768px) {
    font-size: 16px;
  }
`

export const SearchBtn = styled.button`
  background-color: ${({isdarktheme}) =>
    isdarktheme === 'true' ? '#475569' : '#e2e8f0'};
  border: none;
  padding: 5px 30px;
  border-left: 1px solid gray;
  margin: 0;
`

export const LoaderContainer = styled.div`
  height: inherit;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const VideosListContainer = styled.ul`
  margin: 30px 0px 0px 0px;
  width: 100%;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

// No search results view
// Failure View

export const FailureViewContainer = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const FailureViewImg = styled.img`
  min-height: 250px;
  width: 80%;
  @media screen and (min-width: 768px) {
    height: 400px;
  }
  @media screen and (min-width: 992px) {
    height: 450px;
    width: 60%;
    max-width: 650px;
  }
`

export const FailureViewHeading = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: ${({isdarktheme}) => (isdarktheme === 'true' ? '#ffffff' : '#212121')};
`

export const FailureViewText = styled.p`
  font-size: 14px;
  font-weight: normal;
  color: #7e858e;
`
