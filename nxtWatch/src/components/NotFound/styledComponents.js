import styled from 'styled-components'
import {DARK_THEME, LIGHT_THEME} from '../../constants/appConstants'

export const NotFoundContainer = styled.div`
  height: calc(100vh - 80px);
  overflow-y: scroll;
  display: flex;
  flex-direction: row;
`

export const NotFoundViewContainer = styled.div`
  width: 100%;
  height: ${({authorized}) =>
    authorized === 'false' ? '100vh' : 'calc(100vh - 80px)'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({isdarktheme}) =>
    isdarktheme === 'true' ? DARK_THEME : LIGHT_THEME};
  display: flex;
`
