import styled from 'styled-components'
import {DARK_THEME, LIGHT_THEME} from '../../constants/appConstants'

export const LoginContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({isdarktheme}) =>
    isdarktheme === 'true' ? DARK_THEME : LIGHT_THEME};
`

export const FormContainer = styled.form`
  width: 90%;
  border-radius: 5px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  background-color: ${({isdarktheme}) =>
    isdarktheme === 'true' ? '#000000' : '#ffffff'};

  @media screen and (min-width: 576px) {
    width: 60%;
  }
  @media screen and (min-width: 768px) {
    width: 400px;
    padding: 40px;
  }
`

export const FormImg = styled.img`
  margin-bottom: 20px;
  width: 50%;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`

export const CustomContainer = styled.div`
  width: 100%;
`

export const InputLabel = styled.label`
  width: 100%;
  border-radius: 5px;
  color: ${({isdarktheme}) => (isdarktheme === 'true' ? '#f1f1f1' : '#64748b')};
  font-size: 16px;
  font-weight: 600;
`

export const CustomInput = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  margin: 10px 0px 20px 0px;
  padding: 5px 10px;
  border: 1px solid #d7dfe9;
  border-radius: 2px;
  font-size: 16px;
  font-weight: normal;
  color: ${({isdarktheme}) => (isdarktheme === 'true' ? '#f1f1f1' : '#181818')};
  background-color: transparent;
`

export const ShowPasswordLabel = styled.label`
  font-size: 14px;
  margin-left: 5px;
  color: ${({isdarktheme}) => (isdarktheme === 'true' ? '#f1f1f1' : '#64748b')};
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 12px;
`

export const LoginBtn = styled.button`
  border-radius: 5px;
  border: none;
  width: 100%;
  background-color: #4f46e5;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
  padding: 10px 12px;
`
