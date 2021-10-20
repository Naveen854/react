import AppContext from '../../context/AppContext'
import {
  FAILURE_VIEW_DARK_IMG,
  FAILURE_VIEW_LIGHT_IMG,
} from '../../constants/appConstants'
import {
  FailureViewContainer,
  FailureViewImg,
  FailureViewHeading,
  FailureViewText,
} from '../../commonStyles/FailureViewStyles'

const FailureView = ({children}) => (
  <AppContext.Consumer>
    {({isDarkTheme}) => {
      const failureViewImgSrc = isDarkTheme
        ? FAILURE_VIEW_DARK_IMG
        : FAILURE_VIEW_LIGHT_IMG
      return (
        <FailureViewContainer>
          <FailureViewImg src={failureViewImgSrc} alt="failure view" />
          <FailureViewHeading isdarktheme={isDarkTheme.toString()}>
            Oops! Something Went Wrong
          </FailureViewHeading>
          <FailureViewText>
            We are having some trouble to complete your request. Please try
            again.
          </FailureViewText>
          {children}
        </FailureViewContainer>
      )
    }}
  </AppContext.Consumer>
)

export default FailureView
