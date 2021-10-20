import AppContext from '../../context/AppContext'
import {StyledLink, NavBtn, TabName} from './styledComponents'

const NavTabItem = props => {
  const {tabData, children, pathname, closePopUp} = props
  return (
    <AppContext.Consumer>
      {({changeActiveTabId, isDarkTheme}) => {
        const {id, path, displayText} = tabData
        const isActive = path === pathname
        const onClickTabId = () => {
          if (isActive && closePopUp !== undefined) {
            closePopUp()
          }
          changeActiveTabId(id)
        }

        return (
          <StyledLink
            to={path}
            isdarktheme={isDarkTheme.toString()}
            active={isActive.toString()}
          >
            <NavBtn
              onClick={() => onClickTabId(id)}
              isdarktheme={isDarkTheme.toString()}
              active={isActive.toString()}
            >
              {children}
              <TabName active={isActive.toString()}>{displayText}</TabName>
            </NavBtn>
          </StyledLink>
        )
      }}
    </AppContext.Consumer>
  )
}

export default NavTabItem
