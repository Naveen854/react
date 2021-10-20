import styled from 'styled-components'

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
    height: 550px;
    max-width: 600px;
  }
`

export const FailureViewHeading = styled.h1`
  font-size: 26px;
  font-weight: bold;
  color: ${({isdarktheme}) => (isdarktheme === 'true' ? '#f1f1f1' : '#212121')};
`

export const FailureViewText = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #94a3b8;
`

export const RetryBtn = styled.button`
  border: none;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  padding: 10px 20px;
  font-weight: bold;
  font-size: 16px;
  color: #ffffff;
  background-color: #4f46e5;
  padding: 10px 30px;
  font-weight: 600;
`
