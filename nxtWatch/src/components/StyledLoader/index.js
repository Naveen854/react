import Loader from 'react-loader-spinner'
import {LoaderContainer} from './styledComponents'
import AppContext from '../../context/AppContext'

const StyledLoader = () => (
  <AppContext.Consumer>
    {({isDarkTheme}) => (
      <LoaderContainer>
        <div className="loader-container" data-testid="loader">
          <Loader
            type="ThreeDots"
            color={isDarkTheme ? '#ffffff' : '#000000'}
            height="50"
            width="50"
          />
        </div>
      </LoaderContainer>
    )}
  </AppContext.Consumer>
)

export default StyledLoader
