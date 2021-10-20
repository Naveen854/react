import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const StyledLink = styled(Link)`
  text-decoration: none;
  :last-of-type {
    margin-bottom: 0px;
  }
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  width: 100%;
  display: block;
  background-color: ${({isdarktheme, active}) => {
    if (isdarktheme === 'true' && active === 'true') {
      return '#313131'
    }
    if (isdarktheme === 'false' && active === 'true') {
      return '#f1f5f9'
    }
    return 'transparent'
  }};

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`

export const NavBtn = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  height: 40px;
  padding: 10px 20px 10px 42%;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: ${({active}) => (active === 'true' ? 'bold' : '500')};
  color: ${({isdarktheme, active}) => {
    if (isdarktheme === 'false' && active === 'false') {
      return '#7e858e'
    }
    if (isdarktheme === 'true' && active === 'true') {
      return '#ffffff'
    }

    if (isdarktheme === 'false' && active === 'true') {
      return '#000000'
    }
    return '#f1f5f9'
  }};
  @media screen and (min-width: 768px) {
    padding: 10px 20px;
  }
`
export const TabName = styled.p`
  font-size: 16px;
  color: inherit;
  font-weight: inherit;
  font-size: inherit;
  margin-left: 10px;
`
