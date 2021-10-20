import styled from 'styled-components'

export const BannerContainer = styled.div`
  height: 200px;
  padding: 10px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: ${({showBanner}) => (showBanner ? 'flex' : 'none')};
  flex-direction: row;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    padding: 12px 15px;
  }
  @media screen and (min-width: 992px) {
    padding: 12px 30px;
  }
`

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const BannerImg = styled.img`
  height: 35px;
  width: 150px;
  @media screen and (min-width: 768px) {
    height: 50px;
    min-width: 100px;
  }
`

export const BannerText = styled.p`
  font-size: 14px;
  font-weight: 600;
  @media screen and(min-width:768px) {
    font-size: 16px;
  }
`

export const GetItNowBtn = styled.button`
  border: 1px solid #181818;
  background-color: transparent;
  color: #181818;
  font-size: 14px;
  font-weight: 700;
  margin-top: 15px;
  width: 150px;
  padding: 10px 20px;
`

export const CloseBannerBtnContainer = styled.button`
  align-self: flex-start;
  border: none;
  background-color: transparent;
`
