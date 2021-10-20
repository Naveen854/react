import styled from 'styled-components'
import {HiFire} from 'react-icons/hi'

export const ActiveTabIcon = styled(HiFire)`
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
