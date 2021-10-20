import {RiCloseLine} from 'react-icons/ri'
import AppContext from '../../context/AppContext'
import {
  BannerContainer,
  BannerContent,
  CloseBannerBtnContainer,
  BannerImg,
  BannerText,
  GetItNowBtn,
} from './styledComponents'

const Banner = () => (
  <AppContext.Consumer>
    {({showBanner, toggleBannerStatus}) => (
      <BannerContainer showBanner={showBanner} data-testid="banner">
        <BannerContent>
          <BannerImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <BannerText>
            Buy Nxt Watch Premium prepaid plans with <br /> UPI
          </BannerText>
          <GetItNowBtn type="button">GET IT NOW</GetItNowBtn>
        </BannerContent>
        <CloseBannerBtnContainer
          onClick={toggleBannerStatus}
          data-testid="close"
        >
          <RiCloseLine size={20} />
        </CloseBannerBtnContainer>
      </BannerContainer>
    )}
  </AppContext.Consumer>
)

export default Banner
